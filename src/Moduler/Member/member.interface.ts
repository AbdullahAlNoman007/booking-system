import { Types } from 'mongoose';

export interface Tmember {
  id: string;
  name: string;
  user: Types.ObjectId;
  gender: 'male' | 'female' | 'others';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  address: string;
  isDeleted: boolean;
}
