"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.offeredJourneyRouter = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = __importDefault(require("../../middleware/validationRequest"));
const offeredJourney_controller_1 = require("./offeredJourney.controller");
const offeredJourney_validation_1 = require("./offeredJourney.validation");
const auth_1 = __importDefault(require("../../middleware/auth"));
const userRole_1 = require("../../utility/userRole");
const router = express_1.default.Router();
router.post('/create-offeredJourney', (0, auth_1.default)(userRole_1.userRole.admin, userRole_1.userRole.operator), (0, validationRequest_1.default)(offeredJourney_validation_1.offeredJourneyValidation.TofferedJourneyValidationSchema), offeredJourney_controller_1.offeredJourneyController.createOfferedJourney);
router.post('/get-offeredJourney', (0, validationRequest_1.default)(offeredJourney_validation_1.offeredJourneyValidation.TofferedJourneyFindSchema), offeredJourney_controller_1.offeredJourneyController.getAllOfferedJourney);
router.get('/get-offeredJourneyByOperator', (0, auth_1.default)(userRole_1.userRole.operator), offeredJourney_controller_1.offeredJourneyController.getAllOfferedJourneyByOperator);
router.delete('/delete-offeredJourney/:id', (0, auth_1.default)(userRole_1.userRole.admin, userRole_1.userRole.operator), offeredJourney_controller_1.offeredJourneyController.deleteOfferedJourney);
exports.offeredJourneyRouter = router;
