import express from 'express';
import { memberController } from './member.controller';
import validationRequest from '../../middleware/validationRequest';
import { getValidationSchema, memberUpdateSchema } from './member.validation';
import auth from '../../middleware/auth';
import { userRole } from '../../utility/userRole';

const router = express.Router();

router.get('/get-buyer', validationRequest(getValidationSchema), memberController.getABuyer);
router.get('/get-buyers', memberController.getAllBuyer);
router.get(
  '/get-seller',
  validationRequest(getValidationSchema),
  memberController.getASeller,
);
router.get('/get-sellers', memberController.getAllSeller);
router.get(
  '/get-driver',
  validationRequest(getValidationSchema),
  memberController.getADriver,
);
router.get('/get-drivers', memberController.getAllDriver);
router.get('/get-admin', validationRequest(getValidationSchema), memberController.getAAdmin);
router.get('/get-admins', memberController.getAllAdmin);
router.put(
  '/update-buyer/:id',
  auth(userRole.admin),
  validationRequest(memberUpdateSchema),
  memberController.updateBuyer,
);
router.put(
  '/update-seller/:id',
  auth(userRole.admin),
  validationRequest(memberUpdateSchema),
  memberController.updateSeller,
);
router.put(
  '/update-driver/:id',
  auth(userRole.admin),
  validationRequest(memberUpdateSchema),
  memberController.updateDriver,
);
router.put(
  '/update-admin/:id',
  auth(userRole.admin),
  validationRequest(memberUpdateSchema),
  memberController.updateAdmin,
);
router.delete(
  '/delete-buyer/:id',
  auth(userRole.admin),
  memberController.deleteBuyer,
);
router.delete(
  '/delete-seller/:id',
  auth(userRole.admin),
  memberController.deleteSeller,
);
router.delete(
  '/delete-driver/:id',
  auth(userRole.admin),
  memberController.deleteDriver,
);
router.delete(
  '/delete-admin/:id',
  auth(userRole.admin),
  memberController.deleteAdmin,
);

export const memberRouter = router;
