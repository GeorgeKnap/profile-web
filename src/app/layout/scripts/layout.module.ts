import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from '../layout.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';


@NgModule({
        imports: [
                SharedModule,
                LayoutRoutingModule
            ],
        declarations: [
                LayoutComponent,
                DashboardComponent
            ],
        entryComponents: [],
        providers: [
            ]
    })
export class LayoutModule { }