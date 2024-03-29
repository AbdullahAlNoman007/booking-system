import express from 'express';
import validationRequest from '../../middleware/validationRequest';
import TbusValidationSchema from './bus.validation';
import { busController } from './bus.controller';
import { userRole } from '../../utility/userRole';
import auth from '../../middleware/auth';

const router = express.Router();

router.post(
  '/create-bus',
  auth(userRole.admin, userRole.moderator),
  validationRequest(TbusValidationSchema),
  busController.createBus,
);
router.get('/get-bus', auth(userRole.admin, userRole.moderator), busController.getAllBus);
router.get('/get-bus/:id', auth(userRole.admin, userRole.moderator), busController.getBus);
router.delete('/delete-bus/:id', auth(userRole.admin, userRole.moderator), busController.deleteBus);

export const busRouter = router;
