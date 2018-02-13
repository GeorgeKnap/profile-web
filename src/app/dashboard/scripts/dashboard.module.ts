import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular/main';

import { DashboardComponent } from '../dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AboutMeComponent } from '../cards/about-me/about-me.component';
import { CardWrapperComponent } from '../cards/card-wrapper/card-wrapper.component';
import { EmploymentHistoryComponent } from '../cards/employment-history/employment-history.component';
import { EducationComponent } from '../cards/education/education.component';
import { RealtimeAppComponent } from '../cards/realtime-app/realtime-app.component';
import { RealtimeAppService } from '../cards/realtime-app/scripts/realtime-app.service';

@NgModule({
    imports: [
        SharedModule,
        DashboardRoutingModule,
        AgGridModule
    ],
    exports: [],
    declarations: [
        DashboardComponent,
        AboutMeComponent,
        CardWrapperComponent,
        EmploymentHistoryComponent,
        EducationComponent,
        RealtimeAppComponent
    ],
    providers: [
        RealtimeAppService
    ],
})
export class DashboardModule { }
