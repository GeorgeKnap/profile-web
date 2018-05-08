import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular/main';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { SharedModule } from '../../shared/shared.module';
import { AboutMeComponent } from '../cards/about-me/about-me.component';
import { CardWrapperComponent } from '../cards/card-wrapper/card-wrapper.component';
import { ContactMeComponent } from '../cards/contact-me/contact-me.component';
import { EducationComponent } from '../cards/education/education.component';
import { EmploymentHistoryComponent } from '../cards/employment-history/employment-history.component';
import { RealtimeAppComponent } from '../cards/realtime-app/realtime-app.component';
import { RealtimeAppService } from '../cards/realtime-app/scripts/realtime-app.service';
import { DashboardComponent } from '../dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
    imports: [
        SharedModule,
        DashboardRoutingModule,
        AgGridModule,
        RecaptchaModule.forRoot(),
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
        RealtimeAppService
    ],
})
export class DashboardModule { }
