import { z } from 'zod';

export const memberUpdateSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    gender: z.string().optional(),
    contactNo: z.string().optional()
  }),
});

export const getValidationSchema = z.object({
  body: z.object({
    email: z.string().optional(),
    contactNo: z.string().optional(),
  }),
});
