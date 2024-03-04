import express from 'express'
import validationRequest from '../../middleware/validationRequest'
import { paymentValidationSchema } from './payment.validation'
import { paymentController } from './payment.controller'
import auth from '../../middleware/auth'
import { userRole } from '../../utility/userRole'

const route = express.Router()

route.post('/orderBySSL', auth(userRole.customer, userRole.operator), validationRequest(paymentValidationSchema.TpaymentSSLValidationSchema), paymentController.makePayment)
route.post('/successBySSL/:id', auth(userRole.customer, userRole.operator), paymentController.paymentSuccess)
route.post('/failBySSL/:id', auth(userRole.customer, userRole.operator), paymentController.paymentFail)


route.post('/orderBybKash', auth(userRole.customer, userRole.operator), validationRequest(paymentValidationSchema.TpaymentBkashValidationSchema), paymentController.makePaymentBkash)
route.get('/callbackbKash', auth(userRole.customer, userRole.operator), paymentController.bKashPaymentCallback)

route.post('/orderBynagad', validationRequest(paymentValidationSchema.TpaymentBkashValidationSchema), paymentController.makePaymentNagad)

export const paymentRouter = route