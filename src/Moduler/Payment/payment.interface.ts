import { Types } from "mongoose";

export interface Tpayment {
    name: string;
    email: string;
    contactNo: string;
    journey: Types.ObjectId;
    booking: Types.ObjectId;
    seat: string[];
    price: number;
    transactionId: string;
    url: string;
    isPaid: boolean;
}

export interface Tbooking {
    journey: Types.ObjectId;
    userId: string;
    userName: string;
    userEmail: string;
    contactNo: string;
    journeyDate: string;
    startTime: string;
    seatNo: string[];
    isPaid: boolean;
    price: number;
    _id: Types.ObjectId;
    createdAt: string;
    updatedAt: string;
    __v: number;
}


export interface TPaymentDetails {
    paymentID: string;
    status: string;
    apiVersion: string;
}
