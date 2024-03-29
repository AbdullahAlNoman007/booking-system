import { Types } from 'mongoose';

export interface Tbooking {
  journey: Types.ObjectId;
  userId: string;
  userName: string;
  userEmail: string;
  contactNo: string;
  journeyDate: string;
  startTime: string;
  seatNo: string[];
  price: number;
  isPaid: boolean;
}

export interface TgetBooking {
  offeredJourney: string,
  seatNo: string[]
}
