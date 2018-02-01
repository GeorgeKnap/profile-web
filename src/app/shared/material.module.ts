import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatToolbarModule
    ],
    declarations: [],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatToolbarModule
    ]
})
export class MaterialModule {
}