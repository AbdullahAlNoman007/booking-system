import { Types } from 'mongoose';

export interface Tmember {
  id: string;
  name: string;
  user: Types.ObjectId;
  gender: 'male' | 'female' | 'others';
  email: string;
  contactNo: string;
  bookedJourney?: Types.ObjectId[]
  isDeleted: boolean;
}

export type Tget = {
  email?: string;
  contactNo?: string
}

