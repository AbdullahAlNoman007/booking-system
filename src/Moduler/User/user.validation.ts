import { z } from 'zod';

const gender = ['male', 'female', 'others'] as const;
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

const routeSchema = z.object({
  from: z.string(),
  to: z.string(),
});

export const operatorValidationSchema = z.object({
  body: z.object({
    password: z.string(),
    user: z.object({
      name: z.string(),
      gender: z.enum(gender),
      email: z.string().email(),
      contactNo: z.string(),
      route: z.array(routeSchema),
    }),
  }),
});
export const moderatorValidationSchema = z.object({
  body: z.object({
    password: z.string(),
    user: z.object({
      name: z.string(),
      companyName: z.string(),
      gender: z.enum(gender),
      email: z.string().email(),
      contactNo: z.string(),
      route: z.array(routeSchema),
    }),
  }),
});
