import httpStatus from "http-status"
import sendRespone from "../../utility/sendResponse"
import catchAsync from "../../utility/trycatch"
import { paymentService } from "./payment.service"
import { TPaymentDetails } from "./payment.interface"

const makePayment = catchAsync(async (req, res) => {

    const result = await paymentService.makePaymentInDB(res, req.body)
    sendRespone(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment is processing',
        data: result
    })
})

const paymentSuccess = catchAsync(async (req, res) => {

    const result = await paymentService.paymentSuccess(req.params.id)
    sendRespone(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment is successfully',
        data: result
    })
})
const paymentFail = catchAsync(async (req, res) => {

    const result = await paymentService.paymentFail(req.params.id)
    sendRespone(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment is fail',
        data: result
    })
})

const makePaymentBkash = catchAsync(async (req, res) => {

    const result = await paymentService.makePaymentBkash(req.body)
    sendRespone(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment is processing',
        data: result
    })
})

const bKashPaymentCallback = catchAsync(async (req, res) => {

    const query = req.query

    const result = await paymentService.bKashPaymentCallback(query)
    sendRespone(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment is processing',
        data: result
    })
})


export const paymentController = {
    makePayment,
    paymentSuccess,
    paymentFail,
    makePaymentBkash,
    bKashPaymentCallback
}