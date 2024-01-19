import express from 'express';
import validationRequest from '../../middleware/validationRequest';
import { offeredJourneyController } from './offeredJourney.controller';
import { offeredJourneyValidation } from './offeredJourney.validation';
import auth from '../../middleware/auth';
import { userRole } from '../../utility/userRole';

const router = express.Router();

router.post(
  '/create-offeredJourney',
  auth(userRole.admin, userRole.operator),
  validationRequest(offeredJourneyValidation.TofferedJourneyValidationSchema),
  offeredJourneyController.createOfferedJourney,
);

router.post(
  '/get-offeredJourney',
  validationRequest(offeredJourneyValidation.TofferedJourneyFindSchema),
  offeredJourneyController.getAllOfferedJourney,
);
router.get(
  '/get-offeredJourneyByOperator',
  auth(userRole.operator),
  offeredJourneyController.getAllOfferedJourneyByOperator,
);

router.delete(
  '/delete-offeredJourney/:id',
  auth(userRole.admin, userRole.operator),
  offeredJourneyController.deleteOfferedJourney,
);

export const offeredJourneyRouter = router;
