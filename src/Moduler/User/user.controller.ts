import httpStatus from 'http-status';
import sendRespone from '../../utility/sendResponse';
import catchAsync from '../../utility/trycatch';
import { userService } from './user.service';
import bcrypt from 'bcrypt';
import config from '../../config';

const createCustomer = catchAsync(async (req, res) => {
  const { password, user } = req.body;
  const hashPassword = await bcrypt.hash(password, Number(config.salt_round));
  const result = await userService.createCustomerIntoDB(hashPassword, user);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Customer created Successfully',
    data: result,
  });
});
const createOperator = catchAsync(async (req, res) => {
  const { password, user } = req.body;
  const hashPassword = await bcrypt.hash(password, Number(config.salt_round));
  const result = await userService.createOperatorIntoDB(hashPassword, user);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Operator created Successfully',
    data: result,
  });
});
const createDriver = catchAsync(async (req, res) => {
  const { password, user } = req.body;
  const hashPassword = await bcrypt.hash(password, Number(config.salt_round));
  const result = await userService.createDriverIntoDB(hashPassword, user);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Driver created Successfully',
    data: result,
  });
});
const createAdmin = catchAsync(async (req, res) => {
  const { password, user } = req.body;
  const hashPassword = await bcrypt.hash(password, Number(config.salt_round));
  const result = await userService.createAdminIntoDB(hashPassword, user);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Admin created Successfully',
    data: result,
  });
});
const createModerator = catchAsync(async (req, res) => {
  const { password, user } = req.body;
  const hashPassword = await bcrypt.hash(password, Number(config.salt_round));
  const result = await userService.createModeratorIntoDB(hashPassword, user);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Moderator created Successfully',
    data: result,
  });
});

export const userController = {
  createCustomer,
  createOperator,
  createDriver,
  createAdmin,
  createModerator
};
