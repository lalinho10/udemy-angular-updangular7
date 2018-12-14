import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaisesComponent } from './components/paises/paises.component';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'virtualscroll', pathMatch: 'full' },
    { path: 'virtualscroll', component: VirtualScrollComponent },
    { path: 'dragdrop', component: PaisesComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [ RouterModule.forRoot( APP_ROUTES ) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
