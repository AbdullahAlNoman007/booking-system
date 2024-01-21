import { Schema, model } from "mongoose";
import { Troutes } from "./routes.interface";

const routesSchema = new Schema<Troutes>({
    routes: {
        type: [String],
        required: true,
        default: []
    }
})

export const routesModel = model<Troutes>('routes', routesSchema)