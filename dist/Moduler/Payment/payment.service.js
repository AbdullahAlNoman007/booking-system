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
const makePaymentInDB = (res, payload) => __awaiter(void 0, void 0, void 0, function* () {
    let URL;
    try {
        const tran_id = new mongodb_1.ObjectId().toString();
        payload.transactionId = tran_id;
        const data = {
            total_amount: payload.price,
            currency: 'BDT',
            tran_id: tran_id,
            success_url: `${config_1.default.backend_site}/api/payment/success/${tran_id}`,
            fail_url: `${config_1.default.backend_site}/api/payment/fail/${tran_id}`,
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
            let GatewayPageURL = apiResponse.GatewayPageURL;
            if (GatewayPageURL) {
                URL = GatewayPageURL;
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
    return URL;
});
const paymentSuccess = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield payment_model_1.default.findOneAndUpdate({ transactionId: id }, { isPaid: true }, { new: true, upsert: true });
    return result;
});
const paymentFail = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield payment_model_1.default.findOneAndDelete({ transactionId: id });
    return result;
});
exports.paymentService = {
    makePaymentInDB,
    paymentSuccess,
    paymentFail
};
