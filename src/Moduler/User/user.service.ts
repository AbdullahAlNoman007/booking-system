import mongoose from 'mongoose';
import { Tmember } from '../Member/member.interface';
import { Tuser } from './user.interface';
import generateId from './user.utils';
import { UserModel } from './user.model';
import AppError from '../../Error/AppError';
import httpStatus from 'http-status';
import {
  adminModel,
  customerModel,
  driverModel,
  operatorModel,
} from '../Member/member.model';

const createCustomerIntoDB = async (password: string, payload: Tmember) => {
  const user: Partial<Tuser> = {};
  user.password = password;
  user.email = payload.email;
  user.contactNo = payload.contactNo;
  user.role = 'customer';

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    user.id = (await generateId('customer')) as string;

    const newUser = await UserModel.create([user], { session });
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    const newCustomer = await customerModel.create([payload], { session });
    if (!newCustomer.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Customer');
    }

    await session.commitTransaction();
    await session.endSession();
    return newCustomer;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};
const createOperatorIntoDB = async (password: string, payload: Tmember) => {
  const user: Partial<Tuser> = {};
  user.password = password;
  user.email = payload.email;
  user.contactNo = payload.contactNo;
  user.role = 'operator';


  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    user.id = (await generateId('operator')) as string;

    const newUser = await UserModel.create([user], { session });
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    const newOperator = await operatorModel.create([payload], { session });
    if (!newOperator.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Operator');
    }

    await session.commitTransaction();
    await session.endSession();
    return newOperator;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};
const createDriverIntoDB = async (password: string, payload: Tmember) => {
  const user: Partial<Tuser> = {};
  user.password = password;
  user.email = payload.email;
  user.contactNo = payload.contactNo;
  user.role = 'driver';

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    user.id = (await generateId('driver')) as string;

    const newUser = await UserModel.create([user], { session });
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    const newDriver = await driverModel.create([payload], { session });
    if (!newDriver.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Driver');
    }

    await session.commitTransaction();
    await session.endSession();
    return newDriver;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};
const createAdminIntoDB = async (password: string, payload: Tmember) => {
  const user: Partial<Tuser> = {};
  user.password = password;
  user.email = payload.email;
  user.contactNo = payload.contactNo;
  user.role = 'admin';

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    user.id = (await generateId('admin')) as string;

    const newUser = await UserModel.create([user], { session });
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    const newAdmin = await adminModel.create([payload], { session });
    if (!newAdmin.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Admin');
    }

    await session.commitTransaction();
    await session.endSession();
    return newAdmin;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

export const userService = {
  createCustomerIntoDB,
  createDriverIntoDB,
  createOperatorIntoDB,
  createAdminIntoDB,
};
