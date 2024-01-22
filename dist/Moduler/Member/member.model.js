"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminModel = exports.driverModel = exports.operatorModel = exports.customerModel = void 0;
const mongoose_1 = require("mongoose");
const memberSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    user: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    gender: { type: String, enum: ['male', 'female', 'others'], required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    bookedJourney: { type: [mongoose_1.Schema.Types.ObjectId] },
    isDeleted: { type: Boolean, default: false },
});
const routeSchema = new mongoose_1.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
});
const operatorSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    gender: { type: String, enum: ['male', 'female', 'others'], required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    route: { type: [routeSchema], required: true },
});
exports.customerModel = (0, mongoose_1.model)('customer', memberSchema);
exports.operatorModel = (0, mongoose_1.model)('operator', operatorSchema);
exports.driverModel = (0, mongoose_1.model)('driver', memberSchema);
exports.adminModel = (0, mongoose_1.model)('admin', memberSchema);
