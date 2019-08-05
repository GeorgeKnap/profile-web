import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CompactType, DisplayGrid, GridsterConfig, GridType } from 'angular-gridster2';
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
    @ViewChild('gridster', { static: false, read: ElementRef }) gridster: ElementRef;

    gridItems!: Array<GridItem>;
    gridsterOptions: GridsterConfig = {
        gridType: GridType.VerticalFixed,
        fixedRowHeight: 100,
        maxCols: 2,
        compactType: CompactType.None,
        outerMarginLeft: 12,
        outerMarginRight: 12,
        outerMarginTop: 12,
        displayGrid: DisplayGrid.None,
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
                cols: 1,
                rows: 4,
                x: 0,
                y: 0
            },
            {
                card: Card.Education,
                cols: 1,
                rows: 4,
                x: 1,
                y: 0
            },
            {
                card: Card.EmploymentHistory,
                cols: 1,
                rows: 6,
                x: 0,
                y: 4
            },
            {
                card: Card.ContactMe,
                cols: 1,
                rows: 5,
                x: 1,
                y: 4
            },
            {
                card: Card.RealtimeApp,
                cols: 2,
                rows: 5,
                x: 0,
                y: 9
            }
        ];
    }

    constructor(
        private readonly storageService: StorageService,
        private readonly resetGridsterService: ResetGridsterService
    ) { }

    ngOnInit() {
        // const storageGridster = this.storageService.getSessionItem('gk.personal-web.gridsterSettings');
        const storageGridster = null;
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
