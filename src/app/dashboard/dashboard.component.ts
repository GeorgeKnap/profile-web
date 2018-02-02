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
        keepFixedHeightInMobile: false,
        compactType: 'none',
        minCols: 24,
        maxCols: 24,
        minRows: 24,
        maxRows: 500,
        outerMarginLeft: 12,
        outerMarginRight: 12,

        defaultItemCols: 1,
        defaultItemRows: 1,
        minItemCols: 1,
        maxItemCols: 12,
        minItemRows: 1,
        maxItemRows: 100,
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

    private ngUnsubscribe: Subject<any> = new Subject();
    private get defaultGridItems(): Array<GridItem> {
        return [
            {
                card: Card.AboutMe,
                cols: 9,
                rows: 50,
                x: 1,
                y: 0
            },
            {
                card: Card.EmploymentHistory,
                cols: 10,
                rows: 4,
                x: 11,
                y: 0
            }
        ];
    }

    constructor(
        private readonly storageService: StorageService,
        private readonly resetGridsterService: ResetGridsterService
    ) { }

    ngOnInit() {
        let storageGridster = this.storageService.getLocalItem('gk.personal-web.gridsterSettings');
        if (storageGridster) {
            this.gridItems = JSON.parse(storageGridster);
        } else {
            this.gridItems = [...this.defaultGridItems];
        }

        this.resetGridsterService.resetGridster$.takeUntil(this.ngUnsubscribe).subscribe(() => {
            this.gridItems = [...this.defaultGridItems];
            this.storageService.setLocalItem('gk.personal-web.gridsterSettings', JSON.stringify(this.defaultGridItems));
        });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

}