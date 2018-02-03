import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatTooltipModule
    ],
    declarations: [],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatDialogModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatTooltipModule
    ]
})
export class MaterialModule {
    constructor(
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
    ) {
        this.matIconRegistry.addSvgIconInNamespace('gk', 'en', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/lang/en.svg'));
        this.matIconRegistry.addSvgIconInNamespace('gk', 'cs', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/lang/cs.svg'));
        this.matIconRegistry.addSvgIconInNamespace('gk', 'angular', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/angular.svg'));
    }

}