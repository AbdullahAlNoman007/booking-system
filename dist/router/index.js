"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = require("../Moduler/User/user.router");
const member_router_1 = require("../Moduler/Member/member.router");
const auth_router_1 = require("../Moduler/auth/auth.router");
const bus_router_1 = require("../Moduler/Bus/bus.router");
const offeredJourney_router_1 = require("../Moduler/offeredJourney/offeredJourney.router");
const booking_router_1 = require("../Moduler/Booking/booking.router");
const routes_router_1 = require("../Moduler/routes/routes.router");
const payment_router_1 = require("../Moduler/Payment/payment.router");
const router = express_1.default.Router();
const moduleRouters = [
    {
        path: '/user',
        router: user_router_1.userRouter,
    },
    {
        path: '/user',
        router: member_router_1.memberRouter,
    },
    {
        path: '/auth',
        router: auth_router_1.authRouter,
    },
    {
        path: '/bus',
        router: bus_router_1.busRouter,
    },
    {
        path: '/offeredJourney',
        router: offeredJourney_router_1.offeredJourneyRouter,
    },
    {
        path: '/booking',
        router: booking_router_1.bookingRouter,
    },
    {
        path: '/routes',
        router: routes_router_1.routesRouter,
    },
    {
        path: '/payment',
        router: payment_router_1.paymentRouter,
    },
];
moduleRouters.map((route) => router.use(route.path, route.router));
exports.default = router;
