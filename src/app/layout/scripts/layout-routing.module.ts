import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from '../../dashboard/scripts/dashboard.module';
import { LayoutComponent } from '../layout.component';



export const routes: Routes = [
        {
            path: '',
            component: LayoutComponent,
            loadChildren: () => DashboardModule
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