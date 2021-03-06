﻿import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { GridsterModule } from 'angular-gridster2';
// import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MaterialModule } from './material.module';



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule,
        MaterialModule,
        GridsterModule,
        FlexLayoutModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule,
        MaterialModule,
        // ConfirmationDialogComponent,
        GridsterModule,
        FlexLayoutModule
    ],
    declarations: [
        // ConfirmationDialogComponent
    ],
    entryComponents: [
        // ConfirmationDialogComponent
    ]
})
export class SharedModule { }
