import express from 'express'
import validationRequest from '../../middleware/validationRequest'
import TpaymentValidationSchema from './payment.validation'
import { paymentController } from './payment.controller'

const route = express.Router()

route.post('/order', validationRequest(TpaymentValidationSchema), paymentController.makePayment)
route.post('/success/:id', paymentController.paymentSuccess)
route.post('/fail/:id', paymentController.paymentFail)

export const paymentRouter = route