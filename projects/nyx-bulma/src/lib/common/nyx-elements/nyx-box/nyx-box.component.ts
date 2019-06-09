/* Based on Bulma Box Component: https://bulma.io/documentation/elements/box/
//
//
//************************************************************************* */

import { Component, OnInit} from '@angular/core';
import { BaseElement } from '../nyx-base-element';



@Component({
  selector: 'nyx-box',
  templateUrl: './nyx-box.component.html',
  styleUrls: ['./nyx-box.component.scss']
})
export class NyxBoxComponent extends BaseElement implements OnInit {  
  protected elementType = "box";
  constructor() {
    super();
  }
  ngOnInit() {
   
  } 
  
  

}
