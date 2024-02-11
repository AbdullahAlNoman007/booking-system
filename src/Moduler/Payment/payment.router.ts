import express from 'express'
import validationRequest from '../../middleware/validationRequest'
import { paymentValidationSchema } from './payment.validation'
import { paymentController } from './payment.controller'

const route = express.Router()

route.post('/orderBySSL', validationRequest(paymentValidationSchema.TpaymentBkashValidationSchema), paymentController.makePayment)
route.post('/successBySSL/:id', paymentController.paymentSuccess)
route.post('/failBySSL/:id', paymentController.paymentFail)


route.post('/orderBybKash', validationRequest(paymentValidationSchema.TpaymentBkashValidationSchema), paymentController.makePaymentBkash)
route.get('/callbackbKash', paymentController.bKashPaymentCallback)


export const paymentRouter = route