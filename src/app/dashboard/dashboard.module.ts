import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular/main';
import { RecaptchaModule } from 'ng-recaptcha';
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
        RecaptchaModule
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
    ]
})
export class DashboardModule { }
