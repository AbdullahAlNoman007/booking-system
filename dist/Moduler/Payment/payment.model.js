"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TpaymentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    journey: { type: mongoose_1.Schema.Types.ObjectId, ref: 'offerJourney', required: true },
    booking: { type: mongoose_1.Schema.Types.ObjectId, ref: 'bookings', required: true, unique: true },
    seat: { type: [String], required: true },
    price: { type: Number, required: true },
    transactionId: { type: String, required: true, unique: true },
    url: { type: String, unique: true },
    isPaid: { type: Boolean, required: true, default: false },
});
const paymentModel = (0, mongoose_1.model)('payment', TpaymentSchema);
exports.default = paymentModel;
