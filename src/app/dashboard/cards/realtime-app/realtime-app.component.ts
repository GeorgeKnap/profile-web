import { Component, OnInit, OnDestroy } from '@angular/core';
import { GridOptions, ColDef } from 'ag-grid/main';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { TranslateService } from '@ngx-translate/core';

import { HelperService } from '../../../shared/services/helper.service';
import { AgGridNoRowsOverlay } from '../../../shared/components/ag-grid-no-rows-overlay.component';
import { AgGridLoadingOverlay } from '../../../shared/components/ag-grid-loading-overlay.component';
import { RealtimeAppService } from './scripts/realtime-app.service';

@Component({
  selector: 'gk-realtime-app',
  templateUrl: './realtime-app.component.html',
  styleUrls: ['./realtime-app.component.scss']
})
export class RealtimeAppComponent implements OnInit, OnDestroy {

  gridOptions!: GridOptions;

  private readonly ngUnsubscribe: Subject<any> = new Subject();

  constructor(
    private readonly translateService: TranslateService,
    private readonly helperService: HelperService,
    private readonly realtimeAppService: RealtimeAppService
  ) {
    //
  }

  ngOnInit() {
    this.gridOptions = {
      columnDefs: [
        {
          field: 'code',
          filter: 'agSetColumnFilter',
          headerName: this.translateService.instant('realtimeApp.headers.code'),
          headerValueGetter: () => this.translateService.instant('realtimeApp.headers.code')
        },
        {
          field: 'name',
          filter: 'agTextColumnFilter',
          headerName: this.translateService.instant('realtimeApp.headers.name'),
          headerValueGetter: () => this.translateService.instant('realtimeApp.headers.name'),
          width: 300
        },
        {
          field: 'bid',
          filter: 'agNumberColumnFilter',
          headerName: this.translateService.instant('realtimeApp.headers.bid'),
          headerValueGetter: () => this.translateService.instant('realtimeApp.headers.bid'),
        },
        {
          field: 'mid',
          filter: 'agNumberColumnFilter',
          headerName: this.translateService.instant('realtimeApp.headers.mid'),
          headerValueGetter: () => this.translateService.instant('realtimeApp.headers.mid'),
        },
        {
          field: 'ask',
          filter: 'agNumberColumnFilter',
          headerName: this.translateService.instant('realtimeApp.headers.mid'),
          headerValueGetter: () => this.translateService.instant('realtimeApp.headers.mid'),
        },
        {
          field: 'ask',
          filter: 'agNumberColumnFilter',
          headerName: this.translateService.instant('realtimeApp.headers.ask'),
          headerValueGetter: () => this.translateService.instant('realtimeApp.headers.ask'),
        },
      ] as Array<ColDef>,
      rowData: undefined,
      animateRows: true,
      suppressCellSelection: true,
      suppressRowClickSelection: true,
      suppressHorizontalScroll: false,
      enableSorting: false,
      enableColResize: true,
      enableFilter: true,
      enableRangeSelection: false,
      rowHeight: 42,
      headerHeight: 48,
      suppressMenuHide: true,
      groupSelectsChildren: false,
      defaultColDef: {
        filter: 'agTextColumnFilter',
        minWidth: 100
      },
      context: {
        sourcesComponent: this
      },
      localeTextFunc: (key, defaultValue) => this.helperService.agGridLang(key, defaultValue),
      noRowsOverlayComponentFramework: AgGridNoRowsOverlay,
      loadingOverlayComponentFramework: AgGridLoadingOverlay,
      onGridReady: () => {
        this.translateService.onLangChange.takeUntil(this.ngUnsubscribe).subscribe((lang) => {
          this.gridOptions.api!.refreshHeader();
        });

        this.realtimeAppService.getSampleData().subscribe((data) => {
          if (!this.gridOptions.api) {
            return;
          }
          if (this.gridOptions.rowData === undefined) {
            this.gridOptions.api!.setRowData(data);
          } else {
            this.gridOptions.api!.updateRowData({ update: data });
          }
          this.gridOptions.api!.sizeColumnsToFit();
          this.helperService.resizeGridHeight(data.length, 'realtimeGrid');
        });

      }
    };

  }


  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
