import { JwtPayload } from 'jsonwebtoken';
import { Tbus } from './bus.interface';
import busModel from './bus.model';
import { moderatorModel } from '../Member/member.model';

const createBusIntoDB = async (payload: Tbus) => {
  const result = await busModel.create(payload);
  return result;
};

const getAllBus = async (payload: JwtPayload) => {
  if (payload.role === 'moderator') {
    const moderator = await moderatorModel.findOne({ id: payload.id })
    const companyName = moderator?.companyName;
    const result = await busModel.find({ companyName });
    return result;
  }
  const result = await busModel.find({});
  return result;
};

const getBus = async (id: string) => {
  const result = await busModel.findById(id);
  return result;
};

const deleteBus = async (id: string) => {
  const result = await busModel.findByIdAndDelete(id);
  return result;
};

export const busService = {
  createBusIntoDB,
  getAllBus,
  getBus,
  deleteBus,
};
