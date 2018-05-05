import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
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
            document.getElementById(`${elementId}`)!.setAttribute('style', 'height: 120px;');
            return;
        }

        if (rowCount > 15) {
            document.getElementById(`${elementId}`)!.setAttribute('style', 'height: 500px;');
            return;
        }

        let count = ((rowCount + groupsCount) * 48) + 60;
        if (hasFooter) {
            count = count + 48;
        }
        document.getElementById(`${elementId}`)!.setAttribute('style', `height: ${count}px;`);
    }


    agGridLang(key: string, defaultValue: string): string {
        const languageKey = 'agGrid.' + key;
        const value = this.translateService.instant(languageKey);
        return value === languageKey ? defaultValue : value;
    }


}
