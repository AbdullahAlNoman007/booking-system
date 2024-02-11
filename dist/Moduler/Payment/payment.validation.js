"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentValidationSchema = void 0;
const zod_1 = require("zod");
const TpaymentBkashValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
        contactNo: zod_1.z.string().min(11).max(14),
        journey: zod_1.z.string(),
        seat: zod_1.z.array(zod_1.z.string()),
        price: zod_1.z.number().positive(),
    })
});
exports.paymentValidationSchema = {
    TpaymentBkashValidationSchema
};
