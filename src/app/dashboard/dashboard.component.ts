import { Component, OnDestroy, OnInit } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ResetGridsterService } from '../shared/services/reset-gridster.service';
import { StorageService } from '../shared/services/storage.service';
import { Card } from './models/card.enum';
import { GridItem } from './models/grid-item.model';


@Component({
    selector: 'gk-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {

    gridItems!: Array<GridItem>;
    gridsterOptions: GridsterConfig = {
        gridType: 'fit',
        keepFixedHeightInMobile: true,
        compactType: 'none',
        minCols: 24,
        maxCols: 24,
        minRows: 24,
        maxRows: 60,
        outerMarginLeft: 12,
        outerMarginRight: 12,
        displayGrid: 'none',
        defaultItemCols: 10,
        defaultItemRows: 10,
        minItemCols: 1,
        maxItemCols: 24,
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
                x: 0,
                y: 0
            },
            {
                card: Card.EmploymentHistory,
                cols: 13,
                rows: 9,
                x: 11,
                y: 0
            },
            {
                card: Card.Education,
                cols: 11,
                rows: 5,
                x: 0,
                y: 6
            },
            {
                card: Card.ContactMe,
                cols: 7,
                rows: 11,
                x: 0,
                y: 11
            },
            {
                card: Card.RealtimeApp,
                cols: 17,
                rows: 13,
                x: 7,
                y: 11
            }
        ];
    }

    constructor(
        private readonly storageService: StorageService,
        private readonly resetGridsterService: ResetGridsterService
    ) { }

    ngOnInit() {
        const storageGridster = this.storageService.getSessionItem('gk.personal-web.gridsterSettings');
        if (storageGridster) {
            this.gridItems = JSON.parse(storageGridster);
        } else {
            this.gridItems = [...this.defaultGridItems];
        }

        this.resetGridsterService.resetGridster$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => {
            this.gridItems = [...this.defaultGridItems];
            this.storageService.setSessionItem('gk.personal-web.gridsterSettings', JSON.stringify(this.defaultGridItems));
        });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

}
