import express from "express"
import { routesController } from "./routes.controller"

const router = express.Router()

//router.post('/create-routes', routesController.createRoute)
router.get('/get-routes', routesController.getRoutes)

export const routesRouter = router