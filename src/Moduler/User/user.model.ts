import { model, Schema } from 'mongoose';
import { Tuser } from './user.interface';

const userSchema = new Schema<Tuser>({
  id: { type: String, required: true, unique: true },
  email: { type: String, unique: true },
  contactNo: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['customer', 'operator', 'driver', 'admin'],
  },
  status: {
    type: String,
    enum: ['in-progress', 'blocked'],
    default: 'in-progress',
  },
  isDeleted: { type: Boolean, default: false },
});

export const UserModel = model<Tuser>('User', userSchema);
