import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { StorageService } from '../shared/services/storage.service';
import { ResetGridsterService } from '../shared/services/reset-gridster.service';


@Component({
    selector: 'gk-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

    langOption: string;

    private ngUnsubscribe: Subject<any> = new Subject();

    constructor(
        private readonly translateService: TranslateService,
        private readonly storageService: StorageService,
        private readonly titleService: Title,
        private readonly resetGridsterService: ResetGridsterService
    ) {
        this.langOption = this.translateService.currentLang === 'cs' ? 'en' : 'cs';
        this.translateService.onLangChange.takeUntil(this.ngUnsubscribe).subscribe((evt: LangChangeEvent) => {
            this.langOption = evt.lang === 'cs' ? 'en' : 'cs';
            this.storageService.setLocalItem('gk.personal-web.lang', evt.lang);
            this.titleService.setTitle(this.translateService.instant('appHeader'));
        });
    }


    toggleLang() {
        this.translateService.use(this.translateService.currentLang === 'cs' ? 'en' : 'cs');
    }

    resetGridster() {
        this.resetGridsterService.resetGridster();
    }


    async ngOnInit() {
        //
    }

    async ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}