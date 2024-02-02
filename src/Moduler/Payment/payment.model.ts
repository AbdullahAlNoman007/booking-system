import { Schema, model } from 'mongoose';
import { Tpayment } from './payment.interface';


const TpaymentSchema = new Schema<Tpayment>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    journey: { type: Schema.Types.ObjectId, ref: 'offerJourney', required: true },
    seat: { type: [String], required: true },
    price: { type: Number, required: true },
    transactionId: { type: String, required: true, unique: true },
    isPaid: { type: Boolean, required: true, default: false },
});

const paymentModel = model<Tpayment>('payment', TpaymentSchema);

export default paymentModel;
