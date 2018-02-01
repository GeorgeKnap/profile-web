import { Component } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';
import { GridItem } from 'src/app/dashboard/models/grid-item';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Card } from './models/card';

@Component({
    selector: 'gk-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    cards: Array<GridItem> = new Array();

    gridsterOptions: GridsterConfig = {
        gridType: 'fixed',
        fixedColWidth: 450,
        fixedRowHeight: 450,
        keepFixedHeightInMobile: true,
        compactType: 'compactUp',
        maxCols: 2,
        margin: 12,
        outerMargin: false,
        maxRows: 10,
        defaultItemCols: 1,
        maxItemCols: 2,
        maxItemRows: 2,
        itemChangeCallback: (newPosition: GridItem) => {
            console.log('grid item event: ', newPosition);
            //todo: save to local storage
        },
        draggable: {
            enabled: true,
            ignoreContent: true,
            dragHandleClass: 'dragabble'
        },
        resizable: {
            enabled: false
        },
        pushItems: true,
        pushResizeItems: false,
        swap: true
    };

    ngOnInit() {
        this.cards = [
            {
            card: Card.AboutMe,
            cols: 1,
            rows: 1,
            x: 0,
            y: 0
        },
        {
            card: Card.EmploymentHistory,
            cols: 1,
            rows: 1,
            x: 1,
            y: 0
        }
    ];
    }

}