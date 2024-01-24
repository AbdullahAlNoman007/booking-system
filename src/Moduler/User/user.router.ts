import express from 'express';
import { userController } from './user.controller';
import validationRequest from '../../middleware/validationRequest';
import { MemberValidationSchema, operatorValidationSchema } from './user.validation';
import auth from '../../middleware/auth';
import { userRole } from '../../utility/userRole';

const router = express.Router();

router.post(
  '/create-customer',
  validationRequest(MemberValidationSchema),
  userController.createCustomer,
);
router.post(
  '/create-operator',
  auth(userRole.admin),
  validationRequest(operatorValidationSchema),
  userController.createOperator,
);
router.post(
  '/create-driver',
  auth(userRole.admin),
  validationRequest(MemberValidationSchema),
  userController.createDriver,
);
router.post(
  '/create-moderator',
  auth(userRole.admin, userRole.moderator),
  validationRequest(MemberValidationSchema),
  userController.createModerator,
);

export const userRouter = router;