import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { contactMe } from './contact-me/contact-me.function';

admin.initializeApp(functions.config().firebase);
exports.contactMe = contactMe;