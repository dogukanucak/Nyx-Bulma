import { Component, OnInit} from '@angular/core';
import { BaseElement } from '../nyx-base-element';

/**
* Simple box container based on Bulma Box Element: {@link https://bulma.io/documentation/elements/box/}
* Any HTML content or other Nyx elements can be used inside
* @example 
* Example Nyx-Box Usage:
* ```
* <nyx-box>
*   <div class="content">
*        Simple Box Example
*   </div> 
* </nyx-box>
* ```
*
*/

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
