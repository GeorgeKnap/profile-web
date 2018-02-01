import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { SwUpdate } from '@angular/service-worker';
import { ConfirmationDialogService } from './shared/components/confirmation-dialog/confirmation.service';
import { StorageService } from './shared/services/storage.service';


@Component({
  selector: 'gk-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(
    private readonly translateService: TranslateService,
    private readonly swUpdate: SwUpdate,
    private readonly confirmationDialogService: ConfirmationDialogService,
    private readonly storageService: StorageService,
    private readonly titleService: Title
  ) { }

  ngOnInit(): void {
    this.translateService.addLangs(['cs', 'en']);
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang('cs');

    const storageLang = this.storageService.getLocalItem('gk.personal-web.lang');
    this.translateService.use(storageLang ? storageLang : 'cs');

    this.translateService.get('appHeader').subscribe((title) => {
      this.titleService.setTitle(title);
    });

  }

  ngAfterViewInit(): void {
    this.swUpdate.available.subscribe(event => {
      console.log('SW UPDATE event: ', event);
      this.confirmationDialogService.openConfirmationDialog(this.translateService.instant('appUpdate.question'), this.translateService.instant('appUpdate.title')).subscribe(async (isConfirmed) => {
        if (isConfirmed) {
          await this.swUpdate.activateUpdate();
          document.location.reload();
        }
      });

    });
  }

}