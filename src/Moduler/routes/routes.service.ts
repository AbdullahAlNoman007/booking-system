import { routesModel } from "./routes.model"

const data = {
    _id: "65ad2e04422a6c92ecd1eb1e",
    routes: []
}

const create = async () => {
    const result = await routesModel.create(data)
    return result
}
const getRoutesFromDB = async () => {
    const result = await routesModel.find({})
    return result
}

export const routesService = {
    create,
    getRoutesFromDB
}