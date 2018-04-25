import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ResetGridsterService {

    resetGridster$: Observable<any>;
    private resetGridsterSource = new Subject<any>();

    constructor() {
        this.resetGridster$ = this.resetGridsterSource.asObservable();
    }

    resetGridster() {
        this.resetGridsterSource.next();
    }

}