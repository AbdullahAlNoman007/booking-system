"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../utility/sendResponse"));
const trycatch_1 = __importDefault(require("../../utility/trycatch"));
const member_service_1 = require("./member.service");
const getAllCustomer = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getAllCustomerFromDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'All Customers Retrieved Successfully!',
        data: result,
    });
}));
const getAllOperator = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getAllOperatorFromDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'All Operators Retrieved Successfully!',
        data: result,
    });
}));
const getAllOperatorByM = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getAllOperatorByMFromDB(req.user);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'All Operators Retrieved Successfully!',
        data: result,
    });
}));
const getAllDriver = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getAllDriverFromDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'All Drivers Retrieved Successfully!',
        data: result,
    });
}));
const getAllAdmin = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getAllAdminFromDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'All Admins Retrieved Successfully!',
        data: result,
    });
}));
const getAllModerator = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getAllModeratorFromDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'All Moderator Retrieved Successfully!',
        data: result,
    });
}));
const getACustomer = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getACustomerFromDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Customer Retrieved Successfully!',
        data: result,
    });
}));
const getAModerator = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getAModeratorFromDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Moderator Retrieved Successfully!',
        data: result,
    });
}));
const getAOperator = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getAOperatorFromDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Operator Retrieved Successfully!',
        data: result,
    });
}));
const getADriver = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getADriverFromDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Driver Retrieved Successfully!',
        data: result,
    });
}));
const getAAdmin = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getAAdminFromDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Admin Retrieved Successfully!',
        data: result,
    });
}));
const updateCustomer = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield member_service_1.memberService.updateCustomerIntoDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Customer updated Successfully!',
        data: result,
    });
}));
const updateModerator = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield member_service_1.memberService.updateModeratorIntoDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Moderator updated Successfully!',
        data: result,
    });
}));
const updateOperator = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield member_service_1.memberService.updateOperatorIntoDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Operator updated Successfully!',
        data: result,
    });
}));
const updateOperatorBym = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield member_service_1.memberService.updateOperatorBymIntoDB(id, req.body, req.user);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Operator updated Successfully!',
        data: result,
    });
}));
const updateDriver = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield member_service_1.memberService.updateDriverIntoDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Driver updated Successfully!',
        data: result,
    });
}));
const updateAdmin = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield member_service_1.memberService.updateAdminIntoDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Admin updated Successfully!',
        data: result,
    });
}));
const deleteCustomer = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield member_service_1.memberService.deleteCustomerInDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Customer Deleted Successfully!',
        data: result,
    });
}));
const deleteModerator = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield member_service_1.memberService.deleteModeratorInDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Moderator Deleted Successfully!',
        data: result,
    });
}));
const deleteOperator = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield member_service_1.memberService.deleteOperatorInDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Operator Deleted Successfully!',
        data: result,
    });
}));
const deleteDriver = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield member_service_1.memberService.deleteDriverInDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Driver Deleted Successfully!',
        data: result,
    });
}));
const deleteAdmin = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield member_service_1.memberService.deleteAdminInDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Admin Deleted Successfully!',
        data: result,
    });
}));
exports.memberController = {
    getACustomer,
    getADriver,
    getAOperator,
    getAAdmin,
    getAModerator,
    getAllCustomer,
    getAllDriver,
    getAllOperator,
    getAllAdmin,
    getAllModerator,
    updateCustomer,
    updateOperator,
    updateOperatorBym,
    updateDriver,
    updateAdmin,
    updateModerator,
    deleteCustomer,
    deleteOperator,
    deleteDriver,
    deleteAdmin,
    deleteModerator,
    getAllOperatorByM
};
