import express from 'express';
import validationRequest from '../../middleware/validationRequest';
import { bookingController } from './booking.controller';
import { bookingValidation } from './booking.validation';
import auth from '../../middleware/auth';
import { userRole } from '../../utility/userRole';

const router = express.Router();

router.post(
  '/create-booking',
  auth(userRole.customer),
  validationRequest(bookingValidation.TbookingValidationSchema),
  bookingController.createBooking,
);
router.post(
  '/create-bookingByoperator',
  auth(userRole.operator),
  validationRequest(bookingValidation.TbookingOperatorValidationSchema),
  bookingController.createBooking,
);

router.put(
  '/update-booking/:id',
  auth(userRole.customer),
  validationRequest(bookingValidation.TbookingUpdateSchema),
  bookingController.updateBooking,
);

router.delete(
  '/delete-booking/:id',
  auth(userRole.customer),
  bookingController.deleteBooking,
);

router.get('/get-booking', auth(userRole.admin), bookingController.getBooking);

export const bookingRouter = router;
