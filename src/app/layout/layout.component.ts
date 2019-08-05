import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs/operators';
import { ResetGridsterService } from '../shared/services/reset-gridster.service';
import { StorageService } from '../shared/services/storage.service';
import { componentDestroyed } from '../shared/utils/component-destroyed';



@Component({
    selector: 'gk-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

    currentLang: string;


    constructor(
        private readonly translateService: TranslateService,
        private readonly storageService: StorageService,
        private readonly titleService: Title,
        private readonly resetGridsterService: ResetGridsterService
    ) {
        this.currentLang = this.translateService.currentLang;
        this.translateService.onLangChange.pipe(takeUntil(componentDestroyed(this))).subscribe((evt: LangChangeEvent) => {
            this.currentLang = evt.lang;
            this.storageService.setLocalItem('gk.personal-web.lang', evt.lang);
            this.titleService.setTitle(this.translateService.instant('appHeader'));
        });
    }

    changeLang(lang: string) {
        this.translateService.use(lang);
    }

    resetGridster() {
        this.resetGridsterService.resetGridster();
    }


    ngOnInit() {
        //
    }

    ngOnDestroy() {
    }
}
