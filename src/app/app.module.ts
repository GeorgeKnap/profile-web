import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MaterialModule } from './shared/material.module';
import { CoreModule } from './core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/scripts/layout.module';
import { WildcardRoutingModule } from './wildcard-routing.module';

import { environment } from '../environments/environment';

// AoT requires an exported function for factories
export function httpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '/i18n/');
}


@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        MaterialModule,
        AppRoutingModule,
        CoreModule,
        LayoutModule,
        WildcardRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }