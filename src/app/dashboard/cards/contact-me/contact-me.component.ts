import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'gk-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly afDatabase: AngularFireDatabase,
    private readonly matSnackBar: MatSnackBar,
    private readonly translateService: TranslateService
  ) {
    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      company: null,
      email: [null, Validators.required],
      phone: null,
      message: [null, Validators.required],
      recaptcha: [null, Validators.required]
    });
  }

  sendMessage() {
    const { name, company, email, phone, message } = this.contactForm.getRawValue();
    const date = Date();
    const formRequest = { name, company, email, phone, message, date };
    this.afDatabase.list('/messages').push(formRequest).then(() => {
      this.matSnackBar.open(this.translateService.instant('contactMe.messageSent'));
    }, (err) => {
      console.error(err);
      this.matSnackBar.open(this.translateService.instant('contactMe.messageFailed'), undefined, { duration: 6000 });
    });
  }

  ngOnInit() {
  }

}
