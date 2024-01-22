"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesRouter = void 0;
const express_1 = __importDefault(require("express"));
const routes_controller_1 = require("./routes.controller");
const router = express_1.default.Router();
//router.post('/create-routes', routesController.createRoute)
router.get('/get-routes', routes_controller_1.routesController.getRoutes);
exports.routesRouter = router;
