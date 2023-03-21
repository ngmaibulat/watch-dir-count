import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { logger } from './logger.js';
////////////////////////////////////////
dotenv.config();
const options = getSmtpOptions();
const transport = nodemailer.createTransport(options);
export function getSmtpPort() {
    if (process.env.SMTP_PORT) {
        const port = parseInt(process.env.SMTP_PORT);
        return port;
    }
    else {
        return 25;
    }
}
export function getSmtpOptions() {
    //type smtpOptions
    const options = {
        host: process.env.SMTP_HOST || 'localhost',
        port: getSmtpPort(),
        secure: false,
        connectionTimeout: 10000,
        logger: logger,
        debug: true,
    };
    if (process.env.SMTP_USER) {
        const auth = {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS || '',
        };
        options.auth = auth;
    }
    return options;
}
export function getSmtpTransport() {
    return transport;
}
