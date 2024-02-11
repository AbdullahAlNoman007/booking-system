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
exports.paymentUtils = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../../config"));
const AppError_1 = __importDefault(require("../../Error/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const grantToken = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios_1.default.post(config_1.default.bkash_grant_token_url, {
            app_key: config_1.default.bkash_api_key,
            app_secret: config_1.default.bkash_secret_key,
        }, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                username: config_1.default.bkash_username,
                password: config_1.default.bkash_password,
            }
        });
        return data.id_token;
    }
    catch (error) {
        console.log(error);
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Fail to create bKash Grant token");
    }
});
exports.paymentUtils = {
    grantToken
};
