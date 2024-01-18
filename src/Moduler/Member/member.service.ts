import httpStatus from 'http-status';
import AppError from '../../Error/AppError';
import { Tget, Tmember } from './member.interface';
import {
  adminModel,
  customerModel,
  driverModel,
  operatorModel,
} from './member.model';

const getAllCustomerFromDB = async () => {
  const result = await customerModel.find({});
  return result;
};
const getACustomerFromDB = async (query: Tget) => {
  if (Object.keys(query).length === 0) {
    throw new AppError(httpStatus.BAD_REQUEST, "You don't give any query,give an email or contactNo or both")
  }
  const result = await customerModel.findOne(query);
  return result;
};
const getAllOperatorFromDB = async () => {
  const result = await operatorModel.find({});
  return result;
};
const getAOperatorFromDB = async (query: Tget) => {
  if (Object.keys(query).length === 0) {
    throw new AppError(httpStatus.BAD_REQUEST, "You don't give any query,give an email or contactNo or both")
  }
  const result = await operatorModel.findOne(query);
  return result;
};
const getAllDriverFromDB = async () => {
  const result = await driverModel.find({});
  return result;
};
const getADriverFromDB = async (query: Tget) => {
  if (Object.keys(query).length === 0) {
    throw new AppError(httpStatus.BAD_REQUEST, "You don't give any query,give an email or contactNo or both")
  }
  const result = await driverModel.findOne(query);
  return result;
};
const getAllAdminFromDB = async () => {
  const result = await adminModel.find({});
  return result;
};
const getAAdminFromDB = async (query: Tget) => {
  if (Object.keys(query).length === 0) {
    throw new AppError(httpStatus.BAD_REQUEST, "You don't give any query,give an email or contactNo or both")
  }
  const result = await adminModel.findOne(query);
  return result;
};

const updateCustomerIntoDB = async (id: string, payload: Partial<Tmember>) => {
  const isExists = await customerModel.findOne({ id });
  if (!isExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "Customer doesn't Exists!");
  }
  const result = await customerModel.findOneAndUpdate({ id }, payload);
  return result;
};
const updateOperatorIntoDB = async (id: string, payload: Partial<Tmember>) => {
  const isExists = await operatorModel.findOne({ id });
  if (!isExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "Operator doesn't Exists!");
  }
  const result = await operatorModel.findOneAndUpdate({ id }, payload);
  return result;
};
const updateDriverIntoDB = async (id: string, payload: Partial<Tmember>) => {
  const isExists = await driverModel.findOne({ id });
  if (!isExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "Driver doesn't Exists!");
  }
  const result = await driverModel.findOneAndUpdate({ id }, payload);
  return result;
};
const updateAdminIntoDB = async (id: string, payload: Partial<Tmember>) => {
  const isExists = await adminModel.findOne({ id });
  if (!isExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "Admin doesn't Exists!");
  }
  const result = await adminModel.findOneAndUpdate({ id }, payload);
  return result;
};

const deleteCustomerInDB = async (id: string) => {
  const isExists = await customerModel.findOne({ id });
  if (!isExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "Customer doesn't Exists!");
  }
  const result = await customerModel.findOneAndDelete({ id });
  return result;
};
const deleteOperatorInDB = async (id: string) => {
  const isExists = await operatorModel.findOne({ id });
  if (!isExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "Operator doesn't Exists!");
  }
  const result = await operatorModel.findOneAndDelete({ id });
  return result;
};
const deleteDriverInDB = async (id: string) => {
  const isExists = await driverModel.findOne({ id });
  if (!isExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "Driver doesn't Exists!");
  }
  const result = await driverModel.findOneAndDelete({ id });
  return result;
};
const deleteAdminInDB = async (id: string) => {
  const isExists = await adminModel.findOne({ id });
  if (!isExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "Admin doesn't Exists!");
  }
  const result = await adminModel.findOneAndDelete({ id });
  return result;
};

export const memberService = {
  getACustomerFromDB,
  getADriverFromDB,
  getAOperatorFromDB,
  getAllCustomerFromDB,
  getAllDriverFromDB,
  getAllOperatorFromDB,
  updateCustomerIntoDB,
  updateOperatorIntoDB,
  updateDriverIntoDB,
  deleteCustomerInDB,
  deleteOperatorInDB,
  deleteDriverInDB,
  getAAdminFromDB,
  getAllAdminFromDB,
  updateAdminIntoDB,
  deleteAdminInDB,
};
