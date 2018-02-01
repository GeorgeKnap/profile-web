import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { GridsterModule } from 'angular-gridster2';

import { MaterialModule } from './material.module';

import { ConfirmationDialog } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule,
        FlexLayoutModule,
        MaterialModule,
        GridsterModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule,
        FlexLayoutModule,
        MaterialModule,
        ConfirmationDialog,
        GridsterModule
    ],
    declarations: [
        ConfirmationDialog
    ],
    entryComponents: [
        ConfirmationDialog
    ]
})
export class SharedModule { }