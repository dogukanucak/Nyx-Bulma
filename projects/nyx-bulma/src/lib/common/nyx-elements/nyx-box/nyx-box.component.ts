/* Based on Bulma Box Component: https://bulma.io/documentation/elements/box/
//
//
//************************************************************************* */

import { Component, OnInit, Input } from '@angular/core';
import { BaseElement } from '../nyx-base-element';

@Component({
  selector: 'nyx-box',
  templateUrl: './nyx-box.component.html',
  styleUrls: ['./nyx-box.component.scss']
})
export class NyxBoxComponent extends BaseElement implements OnInit{
  private readonly BOX_CLASS = "box";

  constructor() { 
    super();
  }

  ngOnInit() {
    this.baseClass = this.BOX_CLASS;
  } 

}
