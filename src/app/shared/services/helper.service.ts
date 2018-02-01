import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class HelperService {

    constructor(
        private translateService: TranslateService
    ) { }

    isNullOrEmpty(value: string | null): boolean {
        return value == null || value === '';
    }

    isNullOrUndefined(value: any | null | undefined): boolean {
        return value == null || value === undefined;
    }

    resizeGridHeight(rowCount: number, elementId: string, groupsCount?: number, hasFooter?: boolean) {
        if (!groupsCount) {
            groupsCount = 0;
        }

        if (rowCount === 0) {
            $(`#${elementId}`).height('120px');
            return;
        }

        if (rowCount > 15) {
            $(`#${elementId}`).height('550px');
            return;
        }

        let count = ((rowCount + groupsCount) * 42) + 60;
        if (hasFooter) {
            count = count + 42;
        }
        $(`#${elementId}`).height(count + 'px');
    }


    agGridLang(key: string, defaultValue: string): string {
        let languageKey = 'agGrid.' + key;
        let value = this.translateService.instant(languageKey);
        return value === languageKey ? defaultValue : value;
    }


}