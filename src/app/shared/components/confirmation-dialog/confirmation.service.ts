import { Observable } from 'rxjs/Rx';
import { ConfirmationDialog } from './confirmation-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfirmationDialogService {

    constructor(private dialog: MatDialog) { }

    /**
     * Opens the confirmation dialog
     * @param questionKey Translate key to dialog question.
     * @param titleKey Translate key to dialog title.
     */
    public openConfirmationDialog(questionKey?: string, titleKey?: string): Observable<boolean> {

        let dialogRef: MatDialogRef<ConfirmationDialog>;

        dialogRef = this.dialog.open(ConfirmationDialog,
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