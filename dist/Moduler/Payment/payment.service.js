"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentService = void 0;
const SSLCommerzPayment = require('sslcommerz').SslCommerzPayment;
const config_1 = __importDefault(require("../../config"));
const mongodb_1 = require("mongodb");
const AppError_1 = __importDefault(require("../../Error/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const payment_model_1 = __importDefault(require("./payment.model"));
const payment_utils_1 = require("./payment.utils");
const axios_1 = __importDefault(require("axios"));
const uuid_1 = require("uuid");
const booking_model_1 = require("../Booking/booking.model");
const makePaymentBkash = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const bookingInfo = yield booking_model_1.bookingModel.findById(payload.booking);
    const grantToken = yield payment_utils_1.paymentUtils.grantToken();
    const { data } = yield axios_1.default.post(config_1.default.bkash_create_payment_url, {
        mode: '0011',
        payerReference: " ",
        callbackURL: 'http://localhost:5000/api/payment/callbackbKash',
        amount: bookingInfo.price,
        currency: "BDT",
        intent: 'sale',
        merchantInvoiceNumber: 'Inv' + (0, uuid_1.v4)().substring(0, 5)
    }, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: grantToken,
            'x-app-key': config_1.default.bkash_api_key,
        }
    });
    payload.name = bookingInfo.userName;
    payload.email = bookingInfo.userEmail;
    payload.contactNo = bookingInfo.contactNo;
    payload.seat = bookingInfo.seatNo;
    payload.price = bookingInfo.price;
    payload.journey = bookingInfo.journey;
    payload.url = data.bkashURL;
    payload.transactionId = data.paymentID;
    const input = yield payment_model_1.default.create(payload);
    if (!input) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to Payment Process");
    }
    return data.bkashURL;
});
const bKashPaymentCallback = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const grantToken = yield payment_utils_1.paymentUtils.grantToken();
    const { paymentID, status } = payload;
    if (status === 'cancel' || status === 'failure') {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, `Payment is ${status}`);
    }
    else if (status === 'success') {
        try {
            const { data } = yield axios_1.default.post(config_1.default.bkash_execute_payment_url, { paymentID }, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    authorization: grantToken,
                    'x-app-key': config_1.default.bkash_api_key,
                }
            });
            if (data && data.statusCode === '0000' && data.statusMessage === 'Successful') {
                const result = yield payment_model_1.default.findOneAndUpdate({ transactionId: paymentID }, { transactionId: data.trxID, isPaid: true }, { new: true, upsert: true });
                if (!result) {
                    throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to payment");
                }
                const res1 = yield booking_model_1.bookingModel.findByIdAndUpdate(result.booking, { isPaid: true }, { new: true, upsert: true });
                if (!res1) {
                    throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to Payment Process");
                }
            }
            else {
                throw new AppError_1.default(http_status_1.default.BAD_REQUEST, data.statusMessage);
            }
        }
        catch (error) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, error.message);
        }
    }
    return "Payment is Successful";
});
const makePaymentInDB = (res, payload) => __awaiter(void 0, void 0, void 0, function* () {
    let URL = '';
    const bookingInfo = yield booking_model_1.bookingModel.findById(payload.booking);
    payload.name = bookingInfo.userName;
    payload.email = bookingInfo.userEmail;
    payload.contactNo = bookingInfo.contactNo;
    payload.seat = bookingInfo.seatNo;
    payload.price = bookingInfo.price;
    payload.journey = bookingInfo.journey;
    try {
        const tran_id = new mongodb_1.ObjectId().toString();
        payload.transactionId = tran_id;
        const data = {
            total_amount: bookingInfo.price,
            currency: 'BDT',
            tran_id: tran_id,
            success_url: `${config_1.default.backend_site}/api/payment/successBySSL/${tran_id}`,
            fail_url: `${config_1.default.backend_site}/api/paymentBySSL/fail/${tran_id}`,
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
        const sslcz = new SSLCommerzPayment(config_1.default.store_id, config_1.default.store_password, false);
        sslcz.init(data).then((apiResponse) => __awaiter(void 0, void 0, void 0, function* () {
            let GatewayPageURL = yield apiResponse.GatewayPageURL;
            if (GatewayPageURL) {
                URL = yield GatewayPageURL;
            }
            else {
                throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "SSL Session was not successful");
            }
        }));
    }
    catch (error) {
        console.log(error);
    }
    const input = yield payment_model_1.default.create(payload);
    if (!input) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to Payment Process");
    }
    const updateInfo = yield payment_model_1.default.findByIdAndUpdate(input._id, { url: URL }, { new: true, upsert: true });
    if (!updateInfo) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to Payment Process");
    }
    return URL;
});
const paymentSuccess = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield payment_model_1.default.findOneAndUpdate({ transactionId: id }, { isPaid: true }, { new: true, upsert: true });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to Payment Process");
    }
    const res1 = yield booking_model_1.bookingModel.findByIdAndUpdate(result.booking, { isPaid: true }, { new: true, upsert: true });
    if (!res1) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to Payment Process");
    }
    return null;
});
const paymentFail = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield payment_model_1.default.findOneAndDelete({ transactionId: id });
    return result;
});
exports.paymentService = {
    makePaymentInDB,
    paymentSuccess,
    paymentFail,
    makePaymentBkash,
    bKashPaymentCallback
};
