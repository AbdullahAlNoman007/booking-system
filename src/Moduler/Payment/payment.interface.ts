import { Types } from "mongoose";

export interface Tpayment {
    name: string;
    email: string;
    contactNo: string;
    journey: Types.ObjectId;
    seat: string[];
    price: number;
    transactionId: string;
    url: string;
    isPaid: boolean;
}

export interface TPaymentDetails {
    paymentID: string;
    status: string;
    apiVersion: string;
}
