import { z } from 'zod';

const TbookingValidationSchema = z.object({
  body: z.object({
    journey: z.string(),
    slot: z
      .array(
        z.string().refine(
          (seat) => {
            const regexPattern: RegExp = /^[A-Z][1-5]$/;
            return regexPattern.test(seat);
          },
          {
            message:
              " You must give a validation string of Seat following this pattern 'A1 , A2, B3, H2' ",
          },
        ),
      )
      .refine((arr) => {
        if (arr.length > 4) {
          throw new Error('You cannot book more than 4 seats');
        }
        return true;
      }),
    price: z.number()
  }),
});
const TbookingOperatorValidationSchema = z.object({
  body: z.object({
    journey: z.string(),
    slot: z
      .array(
        z.string().refine(
          (seat) => {
            const regexPattern: RegExp = /^[A-Z][1-5]$/;
            return regexPattern.test(seat);
          },
          {
            message:
              " You must give a validation string of Seat following this pattern 'A1 , A2, B3, H2' ",
          },
        ),
      ),
    price: z.number()
  }),
});

const TbookingUpdateSchema = z.object({
  body: z.object({
    oldSeat: z
      .array(
        z.string().refine(
          (seat) => {
            const regexPattern: RegExp = /^[A-Z][1-5]$/;
            return regexPattern.test(seat);
          },
          {
            message:
              " You must give a validation string of Seat following this pattern 'A1 , A2, B3, H2' ",
          },
        ),
      )
      .refine((arr) => {
        if (arr.length > 4) {
          throw new Error('You cannot book more than 4 seats');
        }
        return true;
      }),
    newSeat: z
      .array(
        z.string().refine(
          (seat) => {
            const regexPattern: RegExp = /^[A-Z][1-5]$/;
            return regexPattern.test(seat);
          },
          {
            message:
              " You must give a validation string of Seat following this pattern 'A1 , A2, B3, H2' ",
          },
        ),
      )
      .refine((arr) => {
        if (arr.length > 4) {
          throw new Error('You cannot book more than 4 seats');
        }
        return true;
      }),
  }),
});
const TbookingGetSchema = z.object({
  body: z.object({
    offeredJourney: z.string(),
    seatNo: z.array(z.string())
  }),
});

export const bookingValidation = {
  TbookingValidationSchema,
  TbookingUpdateSchema,
  TbookingOperatorValidationSchema,
  TbookingGetSchema
};
