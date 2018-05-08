import * as functions from 'firebase-functions';
import { transporter } from '../nodemailer-config/nodemailer-config';
import { Message } from './models/message.model';

export const contactMe = functions.database.ref('/messages/{messageId}').onCreate(async (snapshot, context) => {

    const message = snapshot.val() as Message;

    const mailOptions: any = {
        from: `"George Knap Profile Site" <${functions.config().gmail.username}>`,
        to: 'knap.george@gmail.com',
    };
    mailOptions.subject = 'Zprava z profesniho webu!';
    mailOptions.text = `
        <b>Name:</b> ${message.name}</br>
        <b>Company:</b> ${message.company}</br>
        <b>Email:</b> ${message.email}</br>
        <b>PHone:</b> ${message.phone}</br></br>
        <b>PHone:</b> <p>${message.message}</p></br>
    `;

    return transporter.sendMail(mailOptions);
});