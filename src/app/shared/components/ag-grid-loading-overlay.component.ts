import { Component } from '@angular/core';
import { ILoadingOverlayAngularComp } from 'ag-grid-angular';

@Component({
        selector: 'intens-ag-grid-loading-overlay',
        template:`
<div fxLayout="row" fxLayoutAlign="center center">
    <mat-spinner [diameter]="32" [strokeWidth]="2"></mat-spinner>
</div>
`
    })
export class AgGridLoadingOverlay implements ILoadingOverlayAngularComp {
    getGui(): HTMLElement {
        throw new Error('Method not implemented.');
    }
    agInit(): void {
        //
     }
}