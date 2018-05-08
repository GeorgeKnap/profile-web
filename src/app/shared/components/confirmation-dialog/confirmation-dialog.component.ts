import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'gk-confirmation-dialog',
    template: `
<h3 mat-dialog-title>
    <span translate>{{titleKey}}</span>
</h3>
<mat-dialog-content>
    <p translate>{{questionKey}}</p>
</mat-dialog-content>
<mat-dialog-actions>
    <button mat-button aria-label="Accept" [mat-dialog-close]="true">
        <span translate>shared.yes</span>
    </button>
    <button mat-button aria-label="Cancel" [mat-dialog-close]="false">
        <span translate>shared.no</span>
    </button>
</mat-dialog-actions>
`
})
export class ConfirmationDialogComponent {

    titleKey = '';
    questionKey = 'shared.commonConfirmationQuestion';

    constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>) {

    }

}
