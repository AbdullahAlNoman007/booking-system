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
exports.memberService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../Error/AppError"));
const member_model_1 = require("./member.model");
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = require("../User/user.model");
const getAllCustomerFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.customerModel.find({});
    return result;
});
const getACustomerFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(query).length === 0) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "You don't give any query,give an email or contactNo or both");
    }
    const result = yield member_model_1.customerModel.findOne(query);
    return result;
});
const getAllOperatorFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.operatorModel.find({});
    return result;
});
const getAllModeratorFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.moderatorModel.find({});
    return result;
});
const getAOperatorFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(query).length === 0) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "You don't give any query,give an email or contactNo or both");
    }
    const result = yield member_model_1.operatorModel.findOne(query);
    return result;
});
const getAllDriverFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.driverModel.find({});
    return result;
});
const getADriverFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(query).length === 0) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "You don't give any query,give an email or contactNo or both");
    }
    const result = yield member_model_1.driverModel.findOne(query);
    return result;
});
const getAllAdminFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.adminModel.find({});
    return result;
});
const getAAdminFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(query).length === 0) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "You don't give any query,give an email or contactNo or both");
    }
    const result = yield member_model_1.adminModel.findOne(query);
    return result;
});
const getAModeratorFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(query).length === 0) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "You don't give any query,give an email or contactNo or both");
    }
    const result = yield member_model_1.moderatorModel.findOne(query);
    return result;
});
const updateCustomerIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExists = yield member_model_1.customerModel.findOne({ id });
    if (!isExists) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Customer doesn't Exists!");
    }
    const result = yield member_model_1.customerModel.findOneAndUpdate({ id }, payload);
    return result;
});
const updateOperatorIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExists = yield member_model_1.operatorModel.findOne({ id });
    if (!isExists) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Operator doesn't Exists!");
    }
    const result = yield member_model_1.operatorModel.findOneAndUpdate({ id }, payload);
    return result;
});
const updateDriverIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExists = yield member_model_1.driverModel.findOne({ id });
    if (!isExists) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Driver doesn't Exists!");
    }
    const result = yield member_model_1.driverModel.findOneAndUpdate({ id }, payload);
    return result;
});
const updateAdminIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExists = yield member_model_1.adminModel.findOne({ id });
    if (!isExists) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Admin doesn't Exists!");
    }
    const result = yield member_model_1.adminModel.findOneAndUpdate({ id }, payload);
    return result;
});
const updateModeratorIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExists = yield member_model_1.moderatorModel.findOne({ id });
    if (!isExists) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Admin doesn't Exists!");
    }
    const result = yield member_model_1.moderatorModel.findOneAndUpdate({ id }, payload);
    return result;
});
const deleteCustomerInDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExists = yield member_model_1.customerModel.findOne({ id });
    if (!isExists) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Customer doesn't Exists!");
    }
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const user = yield user_model_1.UserModel.findOneAndDelete({ id }, { session });
        if (!user) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Unable to delete");
        }
        const result = yield member_model_1.customerModel.findOneAndDelete({ id }, { session });
        if (!result) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Unable to delete");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return result;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(error);
    }
});
const deleteOperatorInDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExists = yield member_model_1.operatorModel.findOne({ id });
    if (!isExists) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Operator doesn't Exists!");
    }
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const user = yield user_model_1.UserModel.findOneAndDelete({ id }, { session });
        if (!user) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Unable to delete");
        }
        const result = yield member_model_1.operatorModel.findOneAndDelete({ id }, { session });
        if (!result) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Unable to delete");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return result;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(error);
    }
});
const deleteDriverInDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExists = yield member_model_1.driverModel.findOne({ id });
    if (!isExists) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Driver doesn't Exists!");
    }
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const user = yield user_model_1.UserModel.findOneAndDelete({ id }, { session });
        if (!user) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Unable to delete");
        }
        const result = yield member_model_1.driverModel.findOneAndDelete({ id }, { session });
        if (!result) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Unable to delete");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return result;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(error);
    }
});
const deleteAdminInDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExists = yield member_model_1.adminModel.findOne({ id });
    if (!isExists) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Admin doesn't Exists!");
    }
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const user = yield user_model_1.UserModel.findOneAndDelete({ id }, { session });
        if (!user) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Unable to delete");
        }
        const result = yield member_model_1.adminModel.findOneAndDelete({ id }, { session });
        if (!result) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Unable to delete");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return result;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(error);
    }
});
const deleteModeratorInDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExists = yield member_model_1.moderatorModel.findOne({ id });
    if (!isExists) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "moderator doesn't Exists!");
    }
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const user = yield user_model_1.UserModel.findOneAndDelete({ id }, { session });
        if (!user) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Unable to delete");
        }
        const result = yield member_model_1.moderatorModel.findOneAndDelete({ id }, { session });
        if (!result) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Unable to delete");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return result;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(error);
    }
});
exports.memberService = {
    getACustomerFromDB,
    getAModeratorFromDB,
    getADriverFromDB,
    getAOperatorFromDB,
    getAllCustomerFromDB,
    getAllModeratorFromDB,
    getAllDriverFromDB,
    getAllOperatorFromDB,
    updateCustomerIntoDB,
    updateOperatorIntoDB,
    updateModeratorIntoDB,
    updateDriverIntoDB,
    deleteCustomerInDB,
    deleteOperatorInDB,
    deleteDriverInDB,
    getAAdminFromDB,
    getAllAdminFromDB,
    updateAdminIntoDB,
    deleteAdminInDB,
    deleteModeratorInDB
};
