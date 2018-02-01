import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            useHash: false,
            preloadingStrategy: NoPreloading
        })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
