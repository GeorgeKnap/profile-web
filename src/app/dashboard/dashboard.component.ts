import { Component, OnInit, OnDestroy } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

import { GridItem } from './models/grid-item.model';
import { Card } from './models/card.enum';
import { StorageService } from '../shared/services/storage.service';
import { ResetGridsterService } from '../shared/services/reset-gridster.service';

@Component({
    selector: 'gk-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {

    gridItems!: Array<GridItem>;
    gridsterOptions: GridsterConfig = {
        gridType: 'fit',
        fixedColWidth: 100,
        fixedRowHeight: 100,
        keepFixedHeightInMobile: true,
        compactType: 'none',
        minCols: 24,
        maxCols: 24,
        minRows: 24,
        maxRows: 50,
        outerMarginLeft: 12,
        outerMarginRight: 12,
        displayGrid: 'none',
        defaultItemCols: 10,
        defaultItemRows: 10,
        minItemCols: 1,
        maxItemCols: 12,
        minItemRows: 1,
        maxItemRows: 50,
        itemChangeCallback: (newPosition: GridItem) => {
            console.log('grid item event: ', newPosition);
            this.storageService.setSessionItem('gk.personal-web.gridsterSettings', JSON.stringify(this.gridItems));
        },
        draggable: {
            enabled: true,
            ignoreContent: true,
            dragHandleClass: 'draggable'
        },
        resizable: {
            enabled: false
        },
        pushItems: true,
        pushResizeItems: false,
        swap: true
    };

    private ngUnsubscribe: Subject<any> = new Subject();
    private get defaultGridItems(): Array<GridItem> {
        return [
            {
                card: Card.AboutMe,
                cols: 11,
                rows: 6,
                x: 1,
                y: 0
            },
            {
                card: Card.EmploymentHistory,
                cols: 10,
                rows: 11,
                x: 13,
                y: 0
            },
            {
                card: Card.Education,
                cols: 11,
                rows: 6,
                x: 1,
                y: 6
            },
            {
                card: Card.ReltimeApp,
                cols: 11,
                rows: 6,
                x: 1,
                y: 12
            }
        ];
    }

    constructor(
        private readonly storageService: StorageService,
        private readonly resetGridsterService: ResetGridsterService
    ) { }

    ngOnInit() {
        let storageGridster = this.storageService.getSessionItem('gk.personal-web.gridsterSettings');
        if (storageGridster) {
            this.gridItems = JSON.parse(storageGridster);
        } else {
            this.gridItems = [...this.defaultGridItems];
        }

        this.resetGridsterService.resetGridster$.takeUntil(this.ngUnsubscribe).subscribe(() => {
            this.gridItems = [...this.defaultGridItems];
            this.storageService.setSessionItem('gk.personal-web.gridsterSettings', JSON.stringify(this.defaultGridItems));
        });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

}