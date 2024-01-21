import { Types } from 'mongoose';

export interface TofferedJourney {
  driver: Types.ObjectId;
  bus: Types.ObjectId;
  date: string;
  category: 'AC' | 'Non-AC';
  startTime: string;
  endTime: string;
  from: string,
  price: number;
  to: string,
  stops: string[]
  capacity: number;
  slot: string[];
}
