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
        Name: ${message.name}
        Company: ${message.company}
        Email: ${message.email}
        Phone: ${message.phone}
        Message: ${message.message}
    `;

    return transporter.sendMail(mailOptions);
});