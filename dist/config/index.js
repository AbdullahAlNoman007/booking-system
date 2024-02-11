"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
exports.default = {
    port: process.env.PORT,
    node_env: process.env.NODE_ENV,
    database_url: process.env.DATABASE_URL,
    salt_round: process.env.SALTROUND,
    token_secret: process.env.TOKEN_SECRET,
    site_link: process.env.SITE_LINK,
    routes_id: process.env.ROUTES_ID,
    store_id: process.env.STORE_ID,
    store_password: process.env.STORE_PASSWORD,
    backend_site: process.env.BACKEND_SITE,
    bkash_username: process.env.BKASH_USERNAME,
    bkash_password: process.env.BKASH_PASSWORD,
    bkash_api_key: process.env.BKASH_API_KEY,
    bkash_secret_key: process.env.BKASH_SECRET_KEY,
    bkash_grant_token_url: process.env.BKASH_GRANT_TOKEN_URL,
    bkash_create_payment_url: process.env.BKASH_CREATE_PAYMENT_URL,
    bkash_execute_payment_url: process.env.BKASH_EXECUTE_PAYMENT_URL,
    bkash_refund_transaction_url: process.env.BKASH_REFUND_TRANSACTION_URL
};
