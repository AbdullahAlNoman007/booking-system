"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesService = void 0;
const routes_model_1 = require("./routes.model");
const data = {
    _id: "65ad2e04422a6c92ecd1eb1e",
    routes: []
};
const create = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield routes_model_1.routesModel.create(data);
    return result;
});
const getRoutesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield routes_model_1.routesModel.find({});
    return result;
});
exports.routesService = {
    create,
    getRoutesFromDB
};
