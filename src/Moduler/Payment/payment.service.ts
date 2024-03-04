const SSLCommerzPayment = require('sslcommerz').SslCommerzPayment
import config from '../../config';
import { Response } from 'express';
import { ObjectId } from 'mongodb';
import { TPaymentDetails, Tbooking, Tpayment } from './payment.interface';
import AppError from '../../Error/AppError';
import httpStatus from 'http-status';
import paymentModel from './payment.model';
import { paymentUtils } from './payment.utils';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { bookingModel } from '../Booking/booking.model';


const makePaymentBkash = async (payload: Partial<Tpayment>) => {
    const bookingInfo = await bookingModel.findById(payload.booking) as Tbooking
    const grantToken = await paymentUtils.grantToken()

    const { data } = await axios.post(config.bkash_create_payment_url!, {
        mode: '0011',
        payerReference: " ",
        callbackURL: 'http://localhost:5000/api/payment/callbackbKash',
        amount: bookingInfo.price,
        currency: "BDT",
        intent: 'sale',
        merchantInvoiceNumber: 'Inv' + uuidv4().substring(0, 5)
    }, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: grantToken,
            'x-app-key': config.bkash_api_key,
        }
    })

    payload.name = bookingInfo.userName;
    payload.email = bookingInfo.userEmail;
    payload.contactNo = bookingInfo.contactNo;
    payload.seat = bookingInfo.seatNo;
    payload.price = bookingInfo.price
    payload.journey = bookingInfo.journey;
    payload.url = data.bkashURL
    payload.transactionId = data.paymentID
    const input = await paymentModel.create(payload)

    if (!input) {
        throw new AppError(httpStatus.BAD_REQUEST, "Failed to Payment Process")
    }

    return data.bkashURL;

}

const bKashPaymentCallback = async (payload: any) => {
    const grantToken = await paymentUtils.grantToken()
    const { paymentID, status } = payload

    if (status === 'cancel' || status === 'failure') {
        throw new AppError(httpStatus.BAD_REQUEST, `Payment is ${status}`)
    }
    else if (status === 'success') {
        try {
            const { data } = await axios.post(config.bkash_execute_payment_url!, { paymentID }, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    authorization: grantToken,
                    'x-app-key': config.bkash_api_key,
                }
            })
            if (data && data.statusCode === '0000' && data.statusMessage === 'Successful') {
                const result = await paymentModel.findOneAndUpdate({ transactionId: paymentID }, { transactionId: data.trxID, isPaid: true }, { new: true, upsert: true })
                if (!result) {
                    throw new AppError(httpStatus.BAD_REQUEST, "Failed to payment")
                }
                const res1 = await bookingModel.findByIdAndUpdate(result.booking, { isPaid: true }, { new: true, upsert: true })
                if (!res1) {
                    throw new AppError(httpStatus.BAD_REQUEST, "Failed to Payment Process")
                }
            }
            else {
                throw new AppError(httpStatus.BAD_REQUEST, data.statusMessage)
            }
        } catch (error: any) {
            throw new AppError(httpStatus.BAD_REQUEST, error.message)
        }
    }
    return "Payment is Successful"


}

const makePaymentInDB = async (res: Response, payload: Partial<Tpayment>) => {

    let URL: string = '';
    const bookingInfo = await bookingModel.findById(payload.booking) as Tbooking
    payload.name = bookingInfo.userName;
    payload.email = bookingInfo.userEmail;
    payload.contactNo = bookingInfo.contactNo;
    payload.seat = bookingInfo.seatNo;
    payload.price = bookingInfo.price
    payload.journey = bookingInfo.journey;
    try {
        const tran_id = new ObjectId().toString()
        payload.transactionId = tran_id
        const data = {
            total_amount: bookingInfo.price,
            currency: 'BDT',
            tran_id: tran_id,
            success_url: `${config.backend_site}/api/payment/successBySSL/${tran_id}`,
            fail_url: `${config.backend_site}/api/paymentBySSL/fail/${tran_id}`,
            cancel_url: 'http://localhost:3030/cancel',
            ipn_url: 'http://localhost:3030/ipn',
            shipping_method: 'Courier',
            product_name: 'Computer.',
            product_category: 'Electronic',
            product_profile: 'general',
            cus_name: payload.name,
            cus_email: payload.email,
            cus_add1: 'Dhaka',
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: payload.contactNo,
            cus_fax: payload.contactNo,
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };
        const sslcz = new SSLCommerzPayment(config.store_id, config.store_password, false)
        sslcz.init(data).then(async (apiResponse: any) => {
            let GatewayPageURL = await apiResponse.GatewayPageURL
            if (GatewayPageURL) {
                URL = await GatewayPageURL
            }
            else {
                throw new AppError(httpStatus.BAD_REQUEST, "SSL Session was not successful")
            }
        });

    } catch (error) {
        console.log(error);
    }

    const input = await paymentModel.create(payload)
    if (!input) {
        throw new AppError(httpStatus.BAD_REQUEST, "Failed to Payment Process")
    }
    const updateInfo = await paymentModel.findByIdAndUpdate(input._id, { url: URL }, { new: true, upsert: true })

    if (!updateInfo) {
        throw new AppError(httpStatus.BAD_REQUEST, "Failed to Payment Process")
    }
    return URL;
}

const paymentSuccess = async (id: string) => {
    const result = await paymentModel.findOneAndUpdate({ transactionId: id }, { isPaid: true }, { new: true, upsert: true }) as Tpayment;
    if (!result) {
        throw new AppError(httpStatus.BAD_REQUEST, "Failed to Payment Process")
    }
    const res1 = await bookingModel.findByIdAndUpdate(result.booking, { isPaid: true }, { new: true, upsert: true })
    if (!res1) {
        throw new AppError(httpStatus.BAD_REQUEST, "Failed to Payment Process")
    }
    return null
}

const paymentFail = async (id: string) => {
    const result = await paymentModel.findOneAndDelete({ transactionId: id })
    return result
}

const makePaymentNagad = async (payload: any) => {

    // const bookingInfo = await bookingModel.findById(payload.booking) as Tbooking
    const grantToken = await paymentUtils.grantToken()
    // Your Nagad API credentials
    const API_KEY = "MIIBIjANBc54jjMJoP2toR9fGmQV7y9fzj6TIz9SFfsTQOugHkhyRzzhvZisiKzOAAWNX8RMpG+iqQi4p9W9VrmmiCfFDmLFnMrwhncnMsvlXB8QSJCq2irrx3HG0SJJCbS5+atz+E1iqO8QaPJ05snxv82Mf4NlZ4gZK0Pq/VvJ20lSkR+0nk+s/v3BgIyle78wjZP1vWLU4wIDAQAB";
    const API_SECRET = "MIIEvFAAxN1qfKiRiCL720FtrI7QL7fvQ==";

    // Nagad API endpoint for creating payments
    const NAGAD_API_URL = "https://sandbox.nagad.com.bd/ecommerce/checkout/v1/payment";

    const { data } = await axios.post(NAGAD_API_URL, {
        mode: '0011',
        payerReference: " ",
        callbackURL: 'http://localhost:5000/api/payment/callbackNagad',
        amount: payload.amount,
        currency: 1000,
        intent: 'sale',
        merchantInvoiceNumber: 'Inv' + uuidv4().substring(0, 5)
    }, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: grantToken,
            'x-app-key': API_KEY,
        }
    });
    console.log(data);


    // // Update the payload with Nagad-specific data
    // payload.transactionId = data.paymentID;
    // payload.url = data.bkashURL;

    // // Save the payment details to your database
    // const input = await paymentModel.create(payload);

    // if (!input) {
    //     throw new AppError(httpStatus.BAD_REQUEST, "Failed to Payment Process")
    // }

    // return data.bkashURL;
}


export const paymentService = {
    makePaymentInDB,
    paymentSuccess,
    paymentFail,
    makePaymentBkash,
    bKashPaymentCallback,
    makePaymentNagad
}