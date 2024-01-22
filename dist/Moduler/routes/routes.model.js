"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesModel = void 0;
const mongoose_1 = require("mongoose");
const routesSchema = new mongoose_1.Schema({
    routes: {
        type: [String],
        required: true,
        default: []
    }
});
exports.routesModel = (0, mongoose_1.model)('routes', routesSchema);
