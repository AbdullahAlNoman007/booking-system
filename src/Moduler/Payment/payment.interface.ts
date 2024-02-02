import { Types } from "mongoose";

export interface Tpayment {
    name: string;
    email: string;
    contactNo: string;
    journey: Types.ObjectId;
    seat: string[];
    price: number;
    transactionId: string;
    isPaid: boolean;
}