"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmailAddress = exports.isPhoneNumber = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (jwtPayLoad, secret, expiresIn) => {
    return jsonwebtoken_1.default.sign(jwtPayLoad, secret, { expiresIn });
};
exports.createToken = createToken;
function isPhoneNumber(input) {
    const phoneRegex = /^\+?(\d{1,4})?[-.\s]?\(?(\d{1,})\)?[-.\s]?(\d{1,})[-.\s]?(\d{1,})$/;
    return phoneRegex.test(input);
}
exports.isPhoneNumber = isPhoneNumber;
function isEmailAddress(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
}
exports.isEmailAddress = isEmailAddress;
