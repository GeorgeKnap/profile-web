import { Component } from '@angular/core';
import { ILoadingOverlayAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'gk-ag-grid-loading-overlay',
    template: '<mat-spinner [diameter]="32" [strokeWidth]="1"></mat-spinner>',
    styles: [`
    :host {
        display: grid;
        place-item: center;
        height: 100%;
    }
    `]
})
export class LoadingOverlayComponent implements ILoadingOverlayAngularComp {
    private params: any;

    agInit(params): void {
        this.params = params;
    }
}
