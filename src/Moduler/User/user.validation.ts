import { z } from 'zod';

const gender = ['male', 'female'] as const;
export const MemberValidationSchema = z.object({
  body: z.object({
    password: z.string(),
    user: z.object({
      name: z.string(),
      gender: z.enum(gender),
      email: z.string().email(),
      contactNo: z.string()
    }),
  }),
});
export const operatorValidationSchema = z.object({
  body: z.object({
    password: z.string(),
    user: z.object({
      name: z.string(),
      gender: z.enum(gender),
      email: z.string().email(),
      to: z.string(),
      from: z.string(),
      contactNo: z.string()
    }),
  }),
});
