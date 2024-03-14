"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moderatorValidationSchema = exports.operatorValidationSchema = exports.MemberValidationSchema = void 0;
const zod_1 = require("zod");
const gender = ['male', 'female', 'others'];
exports.MemberValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string(),
        user: zod_1.z.object({
            name: zod_1.z.string(),
            gender: zod_1.z.enum(gender),
            email: zod_1.z.string().email(),
            contactNo: zod_1.z.string()
        }),
    }),
});
const routeSchema = zod_1.z.object({
    from: zod_1.z.string(),
    to: zod_1.z.string(),
});
exports.operatorValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string(),
        user: zod_1.z.object({
            name: zod_1.z.string(),
            companyName: zod_1.z.string(),
            gender: zod_1.z.enum(gender),
            email: zod_1.z.string().email(),
            contactNo: zod_1.z.string(),
            route: zod_1.z.array(routeSchema),
        }),
    }),
});
exports.moderatorValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string(),
        user: zod_1.z.object({
            name: zod_1.z.string(),
            companyName: zod_1.z.string(),
            gender: zod_1.z.enum(gender),
            email: zod_1.z.string().email(),
            contactNo: zod_1.z.string()
        }),
    }),
});
