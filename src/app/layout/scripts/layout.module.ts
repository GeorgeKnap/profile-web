import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from '../layout.component';
import { DashboardModule } from '../../dashboard/scripts/dashboard.module';


@NgModule({
        imports: [
                SharedModule,
                LayoutRoutingModule,
                DashboardModule
            ],
        declarations: [
                LayoutComponent
            ],
        entryComponents: [],
        providers: [
            ]
    })
export class LayoutModule { }