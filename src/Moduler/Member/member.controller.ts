import httpStatus from 'http-status';
import sendRespone from '../../utility/sendResponse';
import catchAsync from '../../utility/trycatch';
import { memberService } from './member.service';

const getAllBuyer = catchAsync(async (req, res) => {
  const result = await memberService.getAllBuyerFromDB();
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Customers Retrieved Successfully!',
    data: result,
  });
});

const getAllSeller = catchAsync(async (req, res) => {
  const result = await memberService.getAllSellerFromDB();
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

const getABuyer = catchAsync(async (req, res) => {

  const result = await memberService.getABuyerFromDB(req.body);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Customer Retrieved Successfully!',
    data: result,
  });
});

const getASeller = catchAsync(async (req, res) => {

  const result = await memberService.getASellerFromDB(req.body);
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

const updateBuyer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await memberService.updateBuyerIntoDB(id, req.body);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Customer updated Successfully!',
    data: result,
  });
});

const updateSeller = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await memberService.updateSellerIntoDB(id, req.body);
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

const deleteBuyer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await memberService.deleteBuyerInDB(id);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Customer Deleted Successfully!',
    data: result,
  });
});
const deleteSeller = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await memberService.deleteSellerInDB(id);
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
  getABuyer,
  getADriver,
  getASeller,
  getAAdmin,
  getAllBuyer,
  getAllDriver,
  getAllSeller,
  getAllAdmin,
  updateBuyer,
  updateSeller,
  updateDriver,
  updateAdmin,
  deleteBuyer,
  deleteSeller,
  deleteDriver,
  deleteAdmin,
};
