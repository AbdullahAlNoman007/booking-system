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
exports.busService = void 0;
const bus_model_1 = __importDefault(require("./bus.model"));
const member_model_1 = require("../Member/member.model");
const createBusIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bus_model_1.default.create(payload);
    return result;
});
const getAllBus = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload.role === 'moderator') {
        const moderator = yield member_model_1.moderatorModel.findOne({ id: payload.id });
        const companyName = moderator === null || moderator === void 0 ? void 0 : moderator.companyName;
        const result = yield bus_model_1.default.find({ companyName });
        return result;
    }
    const result = yield bus_model_1.default.find({});
    return result;
});
const getBus = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bus_model_1.default.findById(id);
    return result;
});
const deleteBus = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bus_model_1.default.findByIdAndDelete(id);
    return result;
});
exports.busService = {
    createBusIntoDB,
    getAllBus,
    getBus,
    deleteBus,
};
