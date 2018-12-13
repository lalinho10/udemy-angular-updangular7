import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styles: []
})

export class VirtualScrollComponent implements OnInit {
  personas = Array( 500 ).fill( 1 );

  constructor() {}

  ngOnInit() {
  }

}
