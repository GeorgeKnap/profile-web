import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatTooltipModule
    ],
    declarations: [],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatSnackBarModule,
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
        this.matIconRegistry.addSvgIconInNamespace('gk', 'linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/Linkedin_icon.svg'));
        this.matIconRegistry.addSvgIconInNamespace('gk', 'messenger', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/facebook-messenger.svg'));
        this.matIconRegistry.addSvgIconInNamespace('gk', 'firebase', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/logo-firebase.svg'));
        this.matIconRegistry.addSvgIconInNamespace('gk', 'vse', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/vse.svg'));
    }

}