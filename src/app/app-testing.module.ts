import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { TranslateModule, TranslateFakeLoader, TranslateLoader } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';
import { ConfirmationDialogService } from './shared/components/confirmation-dialog/confirmation.service';
import { StorageService } from './shared/services/storage.service';


@NgModule({
    imports: [
        SharedModule,
        TranslateModule.forRoot({
            loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        }),
    ],
    exports: [],
    declarations: [

    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        ConfirmationDialogService,
        StorageService
    ],
})
export class AppTestingModule { }
