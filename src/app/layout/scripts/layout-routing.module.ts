import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '../layout.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';


export const routes: Routes = [
        {
            path: '',
            component: LayoutComponent,
            children: [
                {
                    path: '',
                    component: DashboardComponent
                }
            ]
        }
    ];

@NgModule({
        imports: [
                RouterModule.forChild(routes)
            ],
        exports: [
                RouterModule,
            ]
    })
export class LayoutRoutingModule { }