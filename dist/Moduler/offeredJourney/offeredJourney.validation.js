"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.offeredJourneyValidation = void 0;
const zod_1 = require("zod");
const TofferedJourneyValidationSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        driver: zod_1.z.string(),
        bus: zod_1.z.string(),
        from: zod_1.z.string(),
        to: zod_1.z.string(),
        stops: zod_1.z.array(zod_1.z.string()),
        date: zod_1.z.string().refine((date) => {
            const regexPattern = /^(?:20\d\d)-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/;
            return regexPattern.test(date);
        }, {
            message: " You must give a validation string of Date following this pattern 'YYYY:MM:DD' ",
        }),
        startTime: zod_1.z.string().refine((time) => {
            const regexPattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
            return regexPattern.test(time);
        }, {
            message: " You must give a validation string of Time following this pattern 'HH:MM' ",
        }),
        endTime: zod_1.z.string().refine((time) => {
            const regexPattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
            return regexPattern.test(time);
        }, {
            message: " You must give a validation string of Time following this pattern 'HH:MM' ",
        }),
    })
        .refine((body) => {
        const start = new Date(`2001-05-04T${body.startTime}`);
        const end = new Date(`2001-05-04T${body.endTime}`);
        return end > start;
    }, {
        message: 'End time must be after Start time!',
    }),
});
const TofferedJourneyFindSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        from: zod_1.z.string(),
        stops: zod_1.z.array(zod_1.z.string()),
        price: zod_1.z.number(),
        date: zod_1.z.string().refine((date) => {
            const regexPattern = /^(?:20\d\d)-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/;
            return regexPattern.test(date);
        }, {
            message: " You must give a validation string of Date following this pattern 'YYYY:MM:DD' ",
        })
    }),
});
exports.offeredJourneyValidation = { TofferedJourneyValidationSchema, TofferedJourneyFindSchema };
