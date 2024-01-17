import { Schema, model } from 'mongoose';
import { Tmember } from './member.interface';

const memberSchema = new Schema<Tmember>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, required: true },
  gender: { type: String, enum: ['male', 'female', 'others'], required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  bookedJourney: { type: [Schema.Types.ObjectId] },
  isDeleted: { type: Boolean, default: false },
});

export const customerModel = model<Tmember>('customer', memberSchema);
export const operatorModel = model<Tmember>('operator', memberSchema);
export const driverModel = model<Tmember>('driver', memberSchema);
export const adminModel = model<Tmember>('admin', memberSchema);
