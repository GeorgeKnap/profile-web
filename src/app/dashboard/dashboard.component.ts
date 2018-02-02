import { Component } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { GridItem } from './models/grid-item.model';
import { Card } from './models/card.enum';
import { StorageService } from '../shared/services/storage.service';

@Component({
    selector: 'gk-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    gridsterOptions: GridsterConfig = {
        gridType: 'fit',
        keepFixedHeightInMobile: false,
        compactType: 'none',
        minCols: 2,
        maxCols: 3,
        outerMarginLeft: 12,
        outerMarginRight: 12,
        maxRows: 10,
        defaultItemCols: 1,
        minItemCols: 1,
        maxItemCols: 2,
        minItemRows: 1,
        maxItemRows: 1,
        itemChangeCallback: (newPosition: GridItem) => {
            console.log('grid item event: ', newPosition);
            this.storageService.setLocalItem('gk.personal-web.gridsterSettings', JSON.stringify(this.gridItems));
        },
        draggable: {
            enabled: true,
            ignoreContent: true,
            dragHandleClass: 'draggable'
        },
        resizable: {
            enabled: true
        },
        pushItems: true,
        pushResizeItems: false,
        swap: true
    };

    gridItems!: Array<GridItem>;

    private defaultGridItems: Array<GridItem> = [
        {
            card: Card.AboutMe,
            cols: 2,
            rows: 1,
            x: 0,
            y: 0
        },
        {
            card: Card.EmploymentHistory,
            cols: 1,
            rows: 1,
            x: 0,
            y: 1
        }
    ];


    constructor(
        private readonly storageService: StorageService
    ) { }

    ngOnInit() {
        let storageGridster = this.storageService.getLocalItem('gk.personal-web.gridsterSettings');
        if (storageGridster) {
            this.gridItems = JSON.parse(storageGridster);
        } else {
            this.gridItems = [...this.defaultGridItems];
        }
    }

}