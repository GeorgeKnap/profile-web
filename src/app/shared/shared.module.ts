import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from './material.module';

import { ConfirmationDialog } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule,
        FlexLayoutModule,
        MaterialModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule,
        FlexLayoutModule,
        MaterialModule,
        ConfirmationDialog
    ],
    declarations: [
        ConfirmationDialog
    ],
    entryComponents: [
        ConfirmationDialog
    ]
})
export class SharedModule { }