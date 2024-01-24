import httpStatus from 'http-status';
import AppError from '../../Error/AppError';
import { Tget, Tmember } from './member.interface';
import {
  adminModel,
  customerModel,
  driverModel,
  moderatorModel,
  operatorModel,
} from './member.model';
import mongoose from 'mongoose';
import { UserModel } from '../User/user.model';

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
const getAllModeratorFromDB = async () => {
  const result = await moderatorModel.find({});
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
const getAModeratorFromDB = async (query: Tget) => {
  if (Object.keys(query).length === 0) {
    throw new AppError(httpStatus.BAD_REQUEST, "You don't give any query,give an email or contactNo or both")
  }
  const result = await moderatorModel.findOne(query);
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
const updateModeratorIntoDB = async (id: string, payload: Partial<Tmember>) => {
  const isExists = await moderatorModel.findOne({ id });
  if (!isExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "Admin doesn't Exists!");
  }
  const result = await moderatorModel.findOneAndUpdate({ id }, payload);
  return result;
};

const deleteCustomerInDB = async (id: string) => {
  const isExists = await customerModel.findOne({ id });
  if (!isExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "Customer doesn't Exists!");
  }
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const user = await UserModel.findOneAndDelete({ id }, { session });
    if (!user) {
      throw new AppError(httpStatus.BAD_REQUEST, "Unable to delete");
    }

    const result = await customerModel.findOneAndDelete({ id }, { session });
    if (!result) {
      throw new AppError(httpStatus.BAD_REQUEST, "Unable to delete");
    }

    await session.commitTransaction();
    await session.endSession();
    return result;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }

};
const deleteOperatorInDB = async (id: string) => {
  const isExists = await operatorModel.findOne({ id });
  if (!isExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "Operator doesn't Exists!");
  }
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const user = await UserModel.findOneAndDelete({ id }, { session });
    if (!user) {
      throw new AppError(httpStatus.BAD_REQUEST, "Unable to delete");
    }

    const result = await operatorModel.findOneAndDelete({ id }, { session });
    if (!result) {
      throw new AppError(httpStatus.BAD_REQUEST, "Unable to delete");
    }

    await session.commitTransaction();
    await session.endSession();
    return result;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};
const deleteDriverInDB = async (id: string) => {
  const isExists = await driverModel.findOne({ id });
  if (!isExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "Driver doesn't Exists!");
  }
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const user = await UserModel.findOneAndDelete({ id }, { session });
    if (!user) {
      throw new AppError(httpStatus.BAD_REQUEST, "Unable to delete");
    }

    const result = await driverModel.findOneAndDelete({ id }, { session });
    if (!result) {
      throw new AppError(httpStatus.BAD_REQUEST, "Unable to delete");
    }

    await session.commitTransaction();
    await session.endSession();
    return result;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};
const deleteAdminInDB = async (id: string) => {
  const isExists = await adminModel.findOne({ id });
  if (!isExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "Admin doesn't Exists!");
  }
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const user = await UserModel.findOneAndDelete({ id }, { session });
    if (!user) {
      throw new AppError(httpStatus.BAD_REQUEST, "Unable to delete");
    }

    const result = await adminModel.findOneAndDelete({ id }, { session });
    if (!result) {
      throw new AppError(httpStatus.BAD_REQUEST, "Unable to delete");
    }

    await session.commitTransaction();
    await session.endSession();
    return result;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};
const deleteModeratorInDB = async (id: string) => {
  const isExists = await moderatorModel.findOne({ id });
  if (!isExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "moderator doesn't Exists!");
  }
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const user = await UserModel.findOneAndDelete({ id }, { session });
    if (!user) {
      throw new AppError(httpStatus.BAD_REQUEST, "Unable to delete");
    }

    const result = await moderatorModel.findOneAndDelete({ id }, { session });
    if (!result) {
      throw new AppError(httpStatus.BAD_REQUEST, "Unable to delete");
    }

    await session.commitTransaction();
    await session.endSession();
    return result;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

export const memberService = {
  getACustomerFromDB,
  getAModeratorFromDB,
  getADriverFromDB,
  getAOperatorFromDB,
  getAllCustomerFromDB,
  getAllModeratorFromDB,
  getAllDriverFromDB,
  getAllOperatorFromDB,
  updateCustomerIntoDB,
  updateOperatorIntoDB,
  updateModeratorIntoDB,
  updateDriverIntoDB,
  deleteCustomerInDB,
  deleteOperatorInDB,
  deleteDriverInDB,
  getAAdminFromDB,
  getAllAdminFromDB,
  updateAdminIntoDB,
  deleteAdminInDB,
  deleteModeratorInDB
};
