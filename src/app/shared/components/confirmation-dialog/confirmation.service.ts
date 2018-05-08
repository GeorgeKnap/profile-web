import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class ConfirmationDialogService {

    constructor(private dialog: MatDialog) { }

    /**
     * Opens the confirmation dialog
     * @param questionKey Translate key to dialog question.
     * @param titleKey Translate key to dialog title.
     */
    public openConfirmationDialog(questionKey?: string, titleKey?: string) {

        let dialogRef: MatDialogRef<ConfirmationDialogComponent>;

        dialogRef = this.dialog.open(ConfirmationDialogComponent,
            {
                disableClose: true
            });
        if (titleKey) {
            dialogRef.componentInstance.titleKey = titleKey;
        }
        if (questionKey) {
            dialogRef.componentInstance.questionKey = questionKey;
        }

        return dialogRef.afterClosed();
    }
}
