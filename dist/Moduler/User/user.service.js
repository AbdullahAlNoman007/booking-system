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
exports.userService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_utils_1 = __importDefault(require("./user.utils"));
const user_model_1 = require("./user.model");
const AppError_1 = __importDefault(require("../../Error/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const member_model_1 = require("../Member/member.model");
const createCustomerIntoDB = (password, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = {};
    user.password = password;
    user.email = payload.email;
    user.contactNo = payload.contactNo;
    user.role = 'customer';
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        user.id = (yield (0, user_utils_1.default)('customer'));
        const newUser = yield user_model_1.UserModel.create([user], { session });
        if (!newUser.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create user');
        }
        payload.id = newUser[0].id;
        payload.user = newUser[0]._id;
        const newCustomer = yield member_model_1.customerModel.create([payload], { session });
        if (!newCustomer.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create Customer');
        }
        yield session.commitTransaction();
        yield session.endSession();
        return newCustomer;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(error);
    }
});
const createOperatorIntoDB = (password, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = {};
    user.password = password;
    user.email = payload.email;
    user.contactNo = payload.contactNo;
    user.role = 'operator';
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        user.id = (yield (0, user_utils_1.default)('operator'));
        console.log(user);
        const newUser = yield user_model_1.UserModel.create([user], { session });
        console.log(newUser);
        if (!newUser.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create user');
        }
        payload.id = newUser[0].id;
        payload.user = newUser[0]._id;
        const newOperator = yield member_model_1.operatorModel.create([payload], { session });
        if (!newOperator.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create Operator');
        }
        yield session.commitTransaction();
        yield session.endSession();
        return newOperator;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(error);
    }
});
const createDriverIntoDB = (password, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = {};
    user.password = password;
    user.email = payload.email;
    user.contactNo = payload.contactNo;
    user.role = 'driver';
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        user.id = (yield (0, user_utils_1.default)('driver'));
        const newUser = yield user_model_1.UserModel.create([user], { session });
        if (!newUser.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create user');
        }
        payload.id = newUser[0].id;
        payload.user = newUser[0]._id;
        const newDriver = yield member_model_1.driverModel.create([payload], { session });
        if (!newDriver.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create Driver');
        }
        yield session.commitTransaction();
        yield session.endSession();
        return newDriver;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(error);
    }
});
const createAdminIntoDB = (password, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = {};
    user.password = password;
    user.email = payload.email;
    user.contactNo = payload.contactNo;
    user.role = 'admin';
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        user.id = (yield (0, user_utils_1.default)('admin'));
        const newUser = yield user_model_1.UserModel.create([user], { session });
        if (!newUser.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create user');
        }
        payload.id = newUser[0].id;
        payload.user = newUser[0]._id;
        const newAdmin = yield member_model_1.adminModel.create([payload], { session });
        if (!newAdmin.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create Admin');
        }
        yield session.commitTransaction();
        yield session.endSession();
        return newAdmin;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(error);
    }
});
exports.userService = {
    createCustomerIntoDB,
    createDriverIntoDB,
    createOperatorIntoDB,
    createAdminIntoDB,
};
