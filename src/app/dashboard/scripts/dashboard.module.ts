import { NgModule } from '@angular/core';

import { DashboardComponent } from '../dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AboutMeComponent } from '../cards/about-me/about-me.component';
import { CardWrapperComponent } from '../cards/card-wrapper/card-wrapper.component';
import { EmploymentHistoryComponent } from '../cards/employment-history/employment-history.component';

@NgModule({
    imports: [
        SharedModule,
        DashboardRoutingModule
    ],
    exports: [],
    declarations: [
        DashboardComponent,
        AboutMeComponent,
        CardWrapperComponent,
        EmploymentHistoryComponent
    ],
    providers: [],
})
export class DashboardModule { }
