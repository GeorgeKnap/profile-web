import { Component, Input, OnInit } from '@angular/core';
import { GridItem } from '../../models/grid-item.model';

@Component({
    selector: 'gk-card-wrapper',
    template: `
    <ng-container [ngSwitch]="gridItem.card">
    <gk-about-me *ngSwitchCase="'AboutMe'"></gk-about-me>
    <gk-employment-history *ngSwitchCase="'EmploymentHistory'"></gk-employment-history>
    <gk-education *ngSwitchCase="'Education'"></gk-education>
    <gk-realtime-app *ngSwitchCase="'RealtimeApp'"></gk-realtime-app>
    <gk-contact-me *ngSwitchCase="'ContactMe'"></gk-contact-me>
    <ng-container *ngSwitchDetault></ng-container>
    </ng-container>`
})
export class CardWrapperComponent implements OnInit {

    @Input() gridItem!: GridItem;

    ngOnInit() {
        //
    }
}
