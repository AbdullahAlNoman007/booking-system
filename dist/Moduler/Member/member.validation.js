"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidationSchema = exports.memberUpdateSchema = void 0;
const zod_1 = require("zod");
exports.memberUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        gender: zod_1.z.string().optional(),
        contactNo: zod_1.z.string().optional()
    }),
});
exports.getValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().optional(),
        contactNo: zod_1.z.string().optional(),
    }),
});
