import express from 'express';
import { memberController } from './member.controller';
import validationRequest from '../../middleware/validationRequest';
import { getValidationSchema, memberUpdateSchema } from './member.validation';
import auth from '../../middleware/auth';
import { userRole } from '../../utility/userRole';

const router = express.Router();

router.get('/get-customer', auth(userRole.admin), validationRequest(getValidationSchema), memberController.getACustomer);
router.get('/get-customers', auth(userRole.admin), memberController.getAllCustomer);
router.get(
  '/get-operator',
  auth(userRole.admin),
  validationRequest(getValidationSchema),
  memberController.getAOperator,
);
router.get('/get-operators', auth(userRole.admin), memberController.getAllOperator);
router.get('/get-moderators', auth(userRole.admin), memberController.getAllModerator);
router.get(
  '/get-moderator',
  auth(userRole.admin),
  validationRequest(getValidationSchema),
  memberController.getAModerator,
);
router.get(
  '/get-driver',
  auth(userRole.admin),
  validationRequest(getValidationSchema),
  memberController.getADriver,
);
router.get('/get-drivers', auth(userRole.admin), memberController.getAllDriver);
router.get('/get-admin', auth(userRole.admin), validationRequest(getValidationSchema), memberController.getAAdmin);
router.get('/get-admins', auth(userRole.admin), memberController.getAllAdmin);
router.put(
  '/update-customer/:id',
  auth(userRole.admin),
  validationRequest(memberUpdateSchema),
  memberController.updateCustomer,
);
router.put(
  '/update-moderator/:id',
  auth(userRole.admin),
  validationRequest(memberUpdateSchema),
  memberController.updateModerator,
);
router.put(
  '/update-operator/:id',
  auth(userRole.admin),
  validationRequest(memberUpdateSchema),
  memberController.updateOperator,
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
  '/delete-customer/:id',
  auth(userRole.admin),
  memberController.deleteCustomer,
);
router.delete(
  '/delete-moderator/:id',
  auth(userRole.admin),
  memberController.deleteModerator,
);
router.delete(
  '/delete-operator/:id',
  auth(userRole.admin),
  memberController.deleteOperator,
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
