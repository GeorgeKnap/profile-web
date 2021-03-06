import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'gk-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit, OnDestroy {

  contactForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly afDb: AngularFireDatabase,
    private readonly matSnackBar: MatSnackBar,
    private readonly translateService: TranslateService
  ) {
    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      company: null,
      email: [null, [Validators.required, Validators.email]],
      phone: null,
      message: [null, Validators.required]
    });
  }

  getEmailErrorMessage() {
    return this.contactForm.get('email')!.hasError('required') ? this.translateService.instant('contactMe.requiredField') :
      this.contactForm.get('email')!.hasError('email') ? 'Not a valid email' :
        '';
  }

  captchaResolved(captchaResponse: string) {
    if (!captchaResponse || !captchaResponse.length) {
      return;
    }
    this.sendMessage();
  }

  private sendMessage() {
    const { name, company, email, phone, message } = this.contactForm.getRawValue();
    const date = Date();
    const formRequest = { name, company, email, phone, message, date };


    this.afDb.list('/messages').push(formRequest).then(() => {
      this.matSnackBar.open(this.translateService.instant('contactMe.messageSent'), undefined, { duration: 5000 });
      this.contactForm.reset();
    }, (err) => {
      console.error(err);
      this.matSnackBar.open(this.translateService.instant('contactMe.messageFailed'), undefined, { duration: 6000 });
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() { }

}
