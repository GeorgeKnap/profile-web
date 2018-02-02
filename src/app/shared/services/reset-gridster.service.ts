import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

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