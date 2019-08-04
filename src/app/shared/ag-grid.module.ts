import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular/main';
import { LoadingOverlayComponent } from './components/ag-grid-loading-overlay.component';
import { NoRowsOverlayComponent } from './components/ag-grid-no-rows-overlay.component';
import { SharedModule } from './shared.module';



@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AgGridModule.withComponents([
            NoRowsOverlayComponent,
            LoadingOverlayComponent
        ]),
    ],
    declarations: [
        NoRowsOverlayComponent,
        LoadingOverlayComponent
    ],
    exports: [],
    entryComponents: [
        NoRowsOverlayComponent,
        LoadingOverlayComponent
    ],
    providers: []
})
export class AgGridSharedModule { }