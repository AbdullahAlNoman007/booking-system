import httpStatus from 'http-status';
import AppError from '../../Error/AppError';
import { driverModel, operatorModel } from '../Member/member.model';
import { TofferedJourney } from './offeredJourney.interface';
import busModel from '../Bus/bus.model';
import { offeredJourneyModel } from './offeredJourney.model';
import { JwtPayload } from 'jsonwebtoken';

const createOfferedJourneyIntoDB = async (payload: TofferedJourney) => {
  const { driver, bus, date } = payload;

  const isDriverExists = await driverModel.findById(driver);
  if (!isDriverExists) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Driver is not found');
  }

  const isBusExists = await busModel.findById(bus);
  if (!isBusExists) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Bus is not found');
  }

  payload.capacity = isBusExists.capacity;
  payload.category = isBusExists.category;
  payload.slot = isBusExists.slot;

  const isBusAndDateConflict = await offeredJourneyModel.findOne({ bus, date });
  if (isBusAndDateConflict) {
    throw new AppError(httpStatus.CONFLICT, 'This Bus has trip on this date');
  }

  const isDriverAndDateConflict = await offeredJourneyModel.findOne({
    driver,
    date,
  });
  if (isDriverAndDateConflict) {
    throw new AppError(
      httpStatus.CONFLICT,
      'This Driver has trip on this date',
    );
  }

  const result = await offeredJourneyModel.create(payload);

  return result;
};

const getAllOfferedJourneyFromDB = async (query: { date: string; startTime: string; from: string; stops: string[]; }) => {

  if (Object.keys(query).length < 3) {
    throw new AppError(httpStatus.BAD_REQUEST, "Provider your destination")
  }

  const from = new RegExp(query?.from, 'i');
  const date = query.date;
  const stops = query?.stops.map((stop: any) => new RegExp(stop, 'i'));

  const result = await offeredJourneyModel
    .find({
      from,
      date,
      stops: { $in: stops }
    })
    .populate({ path: 'driver', select: 'id name email contactNo -_id' })
    .populate({ path: 'bus', select: 'companyName no capacity -_id' });

  return result;

};

const getAllOfferedJourneyFromDBByOperator = async (payload: JwtPayload) => {
  const seller = await operatorModel.findOne({ id: payload.id }).select('route.from route.to -_id');
  const routes = seller?.route;
  let result: any = [];

  if (routes) {
    // Use Promise.all to wait for all async operations to complete
    await Promise.all(
      routes.map(async (route) => {
        const fetchValue = await offeredJourneyModel.find(route);
        result = [...result, ...fetchValue];
      })
    );
  }

  return (result);

}

const deleteOfferedJourneyFromDB = async (id: string) => {
  const result = await offeredJourneyModel.findByIdAndDelete(id);
  return result;
};

export const offeredJourneyService = {
  createOfferedJourneyIntoDB,
  getAllOfferedJourneyFromDB,
  deleteOfferedJourneyFromDB,
  getAllOfferedJourneyFromDBByOperator
};
