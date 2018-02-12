import { Component } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'intens-ag-grid-no-rows-overlay',
    template: `
<div fxLayout="row" fxLayoutAlign="center center">
    <h3 translate>shared.noResultsFound</h3>
</div>
`
})
export class AgGridNoRowsOverlay implements INoRowsOverlayAngularComp {
    getGui(): HTMLElement {
        throw new Error('Method not implemented.');
    }

    agInit(): void {
        //
    }

}