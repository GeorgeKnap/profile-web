import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { ConfirmationDialogService } from './shared/components/confirmation-dialog/confirmation.service';
import { StorageService } from './shared/services/storage.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        Title,
        ConfirmationDialogService,
        StorageService
    ]
} as any)
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

}
