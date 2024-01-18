import { Schema, model } from 'mongoose';
import { TofferedJourney } from './offeredJourney.interface';

const TofferedJourneySchema = new Schema<TofferedJourney>({
  driver: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'driver',
  },
  bus: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'bus',
  },
  category: { type: String, enum: ['AC', 'Non-AC'], required: true },
  date: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  stops: {
    type: [String],
    required: true
  },
  capacity: {
    type: Number,
    required: true,
  },
  slot: {
    type: [String],
    required: true,
  },
});

export const offeredJourneyModel = model<TofferedJourney>(
  'offerJourney',
  TofferedJourneySchema,
);
