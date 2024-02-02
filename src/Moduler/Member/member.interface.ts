import { Types } from 'mongoose';

interface route {
  from: string;
  to: string;
}

export interface Tmember {
  id: string;
  name: string;
  user: Types.ObjectId;
  gender: 'male' | 'female' | 'others';
  email?: string;
  contactNo: string;
  bookedJourney?: Types.ObjectId[]
  isDeleted: boolean;
}
export interface Toperator {
  id: string;
  name: string;
  user: Types.ObjectId;
  gender: 'male' | 'female' | 'others';
  email: string;
  contactNo: string;
  route: route[];
}
export interface Tmoderator {
  id: string;
  name: string;
  companyName: string;
  user: Types.ObjectId;
  gender: 'male' | 'female' | 'others';
  email: string;

  contactNo: string;
}

export type Tget = {
  email?: string;
  contactNo?: string
}

