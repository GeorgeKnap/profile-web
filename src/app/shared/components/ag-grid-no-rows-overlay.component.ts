import { Component } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'gk-ag-grid-no-rows-overlay',
    template: `<h3 translate>agGrid.noResultsFound</h3>`,
    styles: [`
    :host {
        display: grid;
        place-item: center;
        height: 100%;
    }
    `]
})
export class NoRowsOverlayComponent implements INoRowsOverlayAngularComp {
    agInit(): void { }
}
