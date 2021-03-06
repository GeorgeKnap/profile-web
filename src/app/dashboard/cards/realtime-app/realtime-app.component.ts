import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NoRowsOverlayComponent } from '../../../shared/components/ag-grid-no-rows-overlay.component';
import { HelperService } from '../../../shared/services/helper.service';
import { SampleData } from './models/sample-data.model';
import { RealtimeAppService } from './scripts/realtime-app.service';



@Component({
  selector: 'gk-realtime-app',
  templateUrl: './realtime-app.component.html',
  styleUrls: ['./realtime-app.component.scss']
})
export class RealtimeAppComponent implements OnInit, OnDestroy {

  gridOptions: GridOptions;

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
          headerValueGetter: () => {
            return this.translateService.instant('realtimeApp.headers.code');
          }
        },
        {
          field: 'name',
          filter: 'agTextColumnFilter',
          headerValueGetter: () => this.translateService.instant('realtimeApp.headers.name'),
          width: 300
        },
        {
          field: 'bid',
          filter: 'agNumberColumnFilter',
          headerValueGetter: () => this.translateService.instant('realtimeApp.headers.bid'),
          cellClass: 'cell-number',
          valueFormatter: this.numberFormatter,
          cellRenderer: 'agAnimateShowChangeCellRenderer'
        },
        {
          field: 'mid',
          filter: 'agNumberColumnFilter',
          headerValueGetter: () => this.translateService.instant('realtimeApp.headers.mid'),
          cellClass: 'cell-number',
          valueFormatter: this.numberFormatter,
          cellRenderer: 'agAnimateShowChangeCellRenderer'
        },
        {
          field: 'ask',
          filter: 'agNumberColumnFilter',
          headerValueGetter: () => this.translateService.instant('realtimeApp.headers.ask'),
          cellClass: 'cell-number',
          valueFormatter: this.numberFormatter,
          cellRenderer: 'agAnimateShowChangeCellRenderer'
        },
        {
          field: 'volume',
          filter: 'agNumberColumnFilter',
          headerValueGetter: () => this.translateService.instant('realtimeApp.headers.volume'),
          cellClass: 'cell-number',
          valueFormatter: this.numberFormatter,
          cellRenderer: 'agAnimateSlideCellRenderer'
        },
      ] as Array<ColDef>,
      rowData: undefined,
      animateRows: true,
      suppressCellSelection: true,
      suppressRowClickSelection: true,
      suppressHorizontalScroll: false,
      enableRangeSelection: false,
      rowHeight: 42,
      headerHeight: 48,
      suppressMenuHide: true,
      groupSelectsChildren: false,
      getRowNodeId: (data: SampleData) => data.code,
      defaultColDef: {
        filter: 'agTextColumnFilter',
        minWidth: 100,
        sortable: false,
        resizable: true
      },
      context: {
        sourcesComponent: this
      },
      localeTextFunc: (key, defaultValue) => this.helperService.agGridLang(key, defaultValue),
      noRowsOverlayComponentFramework: NoRowsOverlayComponent,
      // loadingOverlayComponentFramework: LoadingOverlayComponent, //not working in ag grid 21.1.1
      onGridReady: (params) => {
        this.translateService.onLangChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe((lang) => {
          params!.api.refreshHeader();
        });

        this.realtimeAppService.getSampleData().pipe(takeUntil(this.ngUnsubscribe)).subscribe((data) => {
          if (this.gridOptions.rowData === undefined) {
            params!.api.setRowData(data);
            this.realtimeAppService.rowUpdates(data).pipe(takeUntil(this.ngUnsubscribe)).subscribe((updates) => {
              params!.api.updateRowData({ update: updates });
            });
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

  private numberFormatter(params) {
    if (typeof params.value === 'number') {
      return params.value.toFixed(2);
    } else {
      return params.value;
    }
  }

}
