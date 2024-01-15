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

export const buyerModel = model<Tmember>('buyer', memberSchema);
export const sellerModel = model<Tmember>('seller', memberSchema);
export const driverModel = model<Tmember>('driver', memberSchema);
export const adminModel = model<Tmember>('admin', memberSchema);
