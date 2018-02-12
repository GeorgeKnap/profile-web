import { Component, OnInit, OnDestroy } from '@angular/core';
import { GridOptions, ColDef } from 'ag-grid/main';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from '../../../shared/services/helper.service';
import { AgGridNoRowsOverlay } from '../../../shared/components/ag-grid-no-rows-overlay.component';
import { AgGridLoadingOverlay } from '../../../shared/components/ag-grid-loading-overlay.component';

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
    private readonly helperService: HelperService
  ) {
    //
  }

  ngOnInit() {
    this.gridOptions = {
      columnDefs: [
        {
          field: 'product',
          filter: 'agSetColumnFilter',
          headerName: this.translateService.instant('realtimeApp.headers.product'),
          headerValueGetter: () => this.translateService.instant('realtimeApp.headers.product'),
        },
        {
          field: 'prize',
          filter: 'agNumberColumnFilter',
          headerName: this.translateService.instant('realtimeApp.headers.price'),
          headerValueGetter: () => this.translateService.instant('realtimeApp.headers.price'),
        },
        {
          field: 'stock',
          filter: 'agNumberColumnFilter',
          headerName: this.translateService.instant('realtimeApp.headers.stock'),
          headerValueGetter: () => this.translateService.instant('realtimeApp.headers.stock'),
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
        //
      }
    };

  }


  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
