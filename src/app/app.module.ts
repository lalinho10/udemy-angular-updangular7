import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
