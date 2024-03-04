import httpStatus from 'http-status';
import sendRespone from '../../utility/sendResponse';
import catchAsync from '../../utility/trycatch';
import { memberService } from './member.service';

const getAllCustomer = catchAsync(async (req, res) => {
  const result = await memberService.getAllCustomerFromDB();
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Customers Retrieved Successfully!',
    data: result,
  });
});

const getAllOperator = catchAsync(async (req, res) => {
  const result = await memberService.getAllOperatorFromDB();
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Operators Retrieved Successfully!',
    data: result,
  });
});
const getAllOperatorByM = catchAsync(async (req, res) => {
  const result = await memberService.getAllOperatorByMFromDB(req.user);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Operators Retrieved Successfully!',
    data: result,
  });
});

const getAllDriver = catchAsync(async (req, res) => {
  const result = await memberService.getAllDriverFromDB();
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Drivers Retrieved Successfully!',
    data: result,
  });
});
const getAllAdmin = catchAsync(async (req, res) => {
  const result = await memberService.getAllAdminFromDB();
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Admins Retrieved Successfully!',
    data: result,
  });
});
const getAllModerator = catchAsync(async (req, res) => {
  const result = await memberService.getAllModeratorFromDB();
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Moderator Retrieved Successfully!',
    data: result,
  });
});

const getACustomer = catchAsync(async (req, res) => {

  const result = await memberService.getACustomerFromDB(req.body);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Customer Retrieved Successfully!',
    data: result,
  });
});
const getAModerator = catchAsync(async (req, res) => {

  const result = await memberService.getAModeratorFromDB(req.body);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Moderator Retrieved Successfully!',
    data: result,
  });
});

const getAOperator = catchAsync(async (req, res) => {

  const result = await memberService.getAOperatorFromDB(req.body);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Operator Retrieved Successfully!',
    data: result,
  });
});

const getADriver = catchAsync(async (req, res) => {

  const result = await memberService.getADriverFromDB(req.body);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Driver Retrieved Successfully!',
    data: result,
  });
});
const getAAdmin = catchAsync(async (req, res) => {
  const result = await memberService.getAAdminFromDB(req.body);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Admin Retrieved Successfully!',
    data: result,
  });
});

const updateCustomer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await memberService.updateCustomerIntoDB(id, req.body);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Customer updated Successfully!',
    data: result,
  });
});
const updateModerator = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await memberService.updateModeratorIntoDB(id, req.body);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Moderator updated Successfully!',
    data: result,
  });
});
const updateOperator = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await memberService.updateOperatorIntoDB(id, req.body);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Operator updated Successfully!',
    data: result,
  });
});
const updateOperatorBym = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await memberService.updateOperatorBymIntoDB(id, req.body, req.user);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Operator updated Successfully!',
    data: result,
  });
});
const updateDriver = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await memberService.updateDriverIntoDB(id, req.body);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Driver updated Successfully!',
    data: result,
  });
});
const updateAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await memberService.updateAdminIntoDB(id, req.body);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Admin updated Successfully!',
    data: result,
  });
});

const deleteCustomer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await memberService.deleteCustomerInDB(id);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Customer Deleted Successfully!',
    data: result,
  });
});
const deleteModerator = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await memberService.deleteModeratorInDB(id);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Moderator Deleted Successfully!',
    data: result,
  });
});
const deleteOperator = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await memberService.deleteOperatorInDB(id);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Operator Deleted Successfully!',
    data: result,
  });
});
const deleteDriver = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await memberService.deleteDriverInDB(id);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Driver Deleted Successfully!',
    data: result,
  });
});
const deleteAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await memberService.deleteAdminInDB(id);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Admin Deleted Successfully!',
    data: result,
  });
});

export const memberController = {
  getACustomer,
  getADriver,
  getAOperator,
  getAAdmin,
  getAModerator,
  getAllCustomer,
  getAllDriver,
  getAllOperator,
  getAllAdmin,
  getAllModerator,
  updateCustomer,
  updateOperator,
  updateOperatorBym,
  updateDriver,
  updateAdmin,
  updateModerator,
  deleteCustomer,
  deleteOperator,
  deleteDriver,
  deleteAdmin,
  deleteModerator,
  getAllOperatorByM
};