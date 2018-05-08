import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';

const mailConfig: any = {
    auth: {
        user: functions.config().gmail.username,
        pass: functions.config().gmail.password
    },
    service: 'gmail'
};

console.log('nodemailer config: ',mailConfig);
export const transporter = nodemailer.createTransport(mailConfig);