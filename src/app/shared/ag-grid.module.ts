import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular/main';
import { LicenseManager } from 'ag-grid-enterprise/main';
import { SharedModule } from './shared.module';

import { AgGridNoRowsOverlay } from './components/ag-grid-no-rows-overlay.component';
import { AgGridLoadingOverlay } from './components/ag-grid-loading-overlay.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AgGridModule.withComponents([
            AgGridNoRowsOverlay,
            AgGridLoadingOverlay
        ]),
    ],
    declarations: [
        AgGridNoRowsOverlay,
        AgGridLoadingOverlay
    ],
    exports: [],
    entryComponents: [
        AgGridNoRowsOverlay,
        AgGridLoadingOverlay
    ],
    providers: []
})
export class AgGridSharedModule {
    constructor() {
        LicenseManager.setLicenseKey('INTENS_Corporation_s.r.o_MultiApp_1Devs31_August_2018__MTUzNTY3MDAwMDAwMA==c724073b39e4e629c4b6c88e6a76f765');
    }
}