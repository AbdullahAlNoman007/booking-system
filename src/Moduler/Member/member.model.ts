import { Schema, model } from 'mongoose';
import { Tmember, Toperator } from './member.interface';

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

const routeSchema = new Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
});

const operatorSchema = new Schema<Toperator>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  gender: { type: String, enum: ['male', 'female', 'others'], required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  route: { type: [routeSchema], required: true },
});

export const customerModel = model<Tmember>('customer', memberSchema);
export const operatorModel = model<Toperator>('operator', operatorSchema);
export const driverModel = model<Tmember>('driver', memberSchema);
export const adminModel = model<Tmember>('admin', memberSchema);
export const moderatorModel = model<Tmember>('moderator', memberSchema)
