"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentValidationSchema = void 0;
const zod_1 = require("zod");
const TpaymentBkashValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        booking: zod_1.z.string(),
    })
});
const TpaymentSSLValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        booking: zod_1.z.string(),
    })
});
exports.paymentValidationSchema = {
    TpaymentBkashValidationSchema,
    TpaymentSSLValidationSchema
};
