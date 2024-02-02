import { z } from 'zod';

const TpaymentValidationSchema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string().email(),
        contactNo: z.string().min(11).max(14),
        journey: z.string(),
        seat: z.array(z.string()),
        price: z.number().positive(),
    })
})

export default TpaymentValidationSchema;
