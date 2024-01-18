import httpStatus from 'http-status';
import sendRespone from '../../utility/sendResponse';
import catchAsync from '../../utility/trycatch';
import { offeredJourneyService } from './offeredJourney.service';

const createOfferedJourney = catchAsync(async (req, res) => {
  const result = await offeredJourneyService.createOfferedJourneyIntoDB(
    req.body,
  );
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Offered Journey is created Successfully!',
    data: result,
  });
});

const getAllOfferedJourney = catchAsync(async (req, res) => {
  const result = await offeredJourneyService.getAllOfferedJourneyFromDB(req.body);
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Offered Journey is retrieved Successfully!',
    data: result,
  });
});

const deleteOfferedJourney = catchAsync(async (req, res) => {
  const result = await offeredJourneyService.deleteOfferedJourneyFromDB(
    req.params.id,
  );
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Offered Journey is deleted Successfully!',
    data: result,
  });
});

const getAllOfferedJourneyByOperator = catchAsync(async (req, res) => {
  const result = await offeredJourneyService.getAllOfferedJourneyFromDBByOperator(req.user)
  sendRespone(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Offered Journey is retrieved Successfully!',
    data: result,
  });
});
export const offeredJourneyController = {
  createOfferedJourney,
  getAllOfferedJourney,
  deleteOfferedJourney,
  getAllOfferedJourneyByOperator
};
