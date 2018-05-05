import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AgGridSharedModule } from './shared/ag-grid.module';


@NgModule({
    imports: [
        CommonModule,
        AgGridSharedModule
    ],
    providers: [
        Title
    ]
} as any)
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

}
