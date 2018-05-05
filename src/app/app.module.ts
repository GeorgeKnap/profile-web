import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { ParallaxModule } from 'ngx-parallax';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { LayoutModule } from './layout/scripts/layout.module';
import { MaterialModule } from './shared/material.module';
import { WildcardRoutingModule } from './wildcard-routing.module';



// AoT requires an exported function for factories
export function httpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '/i18n/');
}


@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
        ParallaxModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        AngularFireModule.initializeApp(environment.firebase, 'george-knap'),
        AngularFireDatabaseModule,
        AngularFireStorageModule,
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