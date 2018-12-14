import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styles: []
})

export class VirtualScrollComponent implements OnInit {
  @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport;

  personas = Array( 500 ).fill( 1 );

  constructor() {}

  ngOnInit() {
  }

  inicioScroll(): void {
    this.viewport.scrollToIndex( 0 );
  }

  mitadScroll(): void {
    this.viewport.scrollToIndex( ( this.personas.length / 2 ) - 1 );
  }

  finScroll(): void {
    this.viewport.scrollToIndex( this.personas.length - 1 );
  }
}
