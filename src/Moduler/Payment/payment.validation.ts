import { z } from 'zod';

const TpaymentBkashValidationSchema = z.object({
    body: z.object({
        booking: z.string(),
    })
})

const TpaymentSSLValidationSchema = z.object({
    body: z.object({
        booking: z.string(),
    })
})

export const paymentValidationSchema = {
    TpaymentBkashValidationSchema,
    TpaymentSSLValidationSchema
}
