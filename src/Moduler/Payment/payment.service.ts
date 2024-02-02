const SSLCommerzPayment = require('sslcommerz').SslCommerzPayment
import config from '../../config';
import { Response } from 'express';
import { ObjectId } from 'mongodb';
import { Tpayment } from './payment.interface';
import AppError from '../../Error/AppError';
import httpStatus from 'http-status';
import paymentModel from './payment.model';

const makePaymentInDB = async (res: Response, payload: Tpayment) => {

    let URL;

    try {
        const tran_id = new ObjectId().toString()
        payload.transactionId = tran_id
        const data = {
            total_amount: payload.price,
            currency: 'BDT',
            tran_id: tran_id,
            success_url: `${config.backend_site}/api/payment/success/${tran_id}`,
            fail_url: `${config.backend_site}/api/payment/fail/${tran_id}`,
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
            let GatewayPageURL = apiResponse.GatewayPageURL
            if (GatewayPageURL) {
                URL = GatewayPageURL
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

    return URL;
}

const paymentSuccess = async (id: string) => {
    const result = await paymentModel.findOneAndUpdate({ transactionId: id }, { isPaid: true }, { new: true, upsert: true });
    return result
}

const paymentFail = async (id: string) => {
    const result = await paymentModel.findOneAndDelete({ transactionId: id })
    return result
}

export const paymentService = {
    makePaymentInDB,
    paymentSuccess,
    paymentFail
}