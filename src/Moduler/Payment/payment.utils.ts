import axios from "axios"
import config from "../../config"
import AppError from "../../Error/AppError"
import httpStatus from "http-status"

const grantToken = async () => {
    try {
        const { data } = await axios.post(config.bkash_grant_token_url!, {
            app_key: config.bkash_api_key,
            app_secret: config.bkash_secret_key,
        }, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                username: config.bkash_username,
                password: config.bkash_password,
            }
        })
        return data.id_token

    } catch (error) {
        console.log(error);
        throw new AppError(httpStatus.BAD_REQUEST, "Fail to create bKash Grant token")
    }
}

export const paymentUtils = {
    grantToken
}