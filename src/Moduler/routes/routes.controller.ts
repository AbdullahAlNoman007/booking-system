import httpStatus from "http-status";
import sendRespone from "../../utility/sendResponse";
import catchAsync from "../../utility/trycatch";
import { routesService } from "./routes.service";

const createRoute = catchAsync(async (req, res) => {
    const result = await routesService.create()
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Offered Journey is created Successfully!',
        data: result,
    });
});
const getRoutes = catchAsync(async (req, res) => {
    const result = await routesService.getRoutesFromDB()
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Offered Journey is retrieved Successfully!',
        data: result,
    });
});

export const routesController = {
    createRoute,
    getRoutes
}

