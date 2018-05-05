import { NgModule } from '@angular/core';
import { ResetGridsterService } from '../../shared/services/reset-gridster.service';
import { SharedModule } from '../../shared/shared.module';
import { LayoutComponent } from '../layout.component';
import { LayoutRoutingModule } from './layout-routing.module';




@NgModule({
    imports: [
        SharedModule,
        LayoutRoutingModule
    ],
    declarations: [
        LayoutComponent
    ],
    entryComponents: [],
    providers: [
        ResetGridsterService
    ]
})
export class LayoutModule { }
