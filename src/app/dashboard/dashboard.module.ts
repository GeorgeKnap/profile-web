import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular/main';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { SharedModule } from './../shared/shared.module';
import { AboutMeComponent } from './cards/about-me/about-me.component';
import { CardWrapperComponent } from './cards/card-wrapper/card-wrapper.component';
import { ContactMeComponent } from './cards/contact-me/contact-me.component';
import { EducationComponent } from './cards/education/education.component';
import { EmploymentHistoryComponent } from './cards/employment-history/employment-history.component';
import { RealtimeAppComponent } from './cards/realtime-app/realtime-app.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
    imports: [
        SharedModule,
        DashboardRoutingModule,
        AgGridModule,
        RecaptchaV3Module,
        RecaptchaFormsModule
    ],
    exports: [],
    declarations: [
        DashboardComponent,
        AboutMeComponent,
        CardWrapperComponent,
        EmploymentHistoryComponent,
        EducationComponent,
        RealtimeAppComponent,
        ContactMeComponent
    ],
    providers: [
        { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LfVMbEUAAAAAA-W0H_E8UvbIxbro8FUWGcgPuLA' }
    ]
})
export class DashboardModule { }
