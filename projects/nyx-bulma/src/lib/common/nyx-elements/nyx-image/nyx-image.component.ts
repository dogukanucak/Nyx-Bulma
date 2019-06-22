import { Component, OnInit, Input } from '@angular/core';
import { BaseElement } from '../nyx-base-element';
import { Bulma } from '../../../decorators/bulma.decorator';

/**
* Image component based on Bulma Image Element: {@link https://bulma.io/documentation/elements/image/}
* 
* @example 
* Example Nyx-Image Usage:
* ```
* <nyx-image dimension="16x16" rounded="true"></nyx-image>
* ```
*
*/

@Component({
  selector: 'nyx-image',
  templateUrl: './nyx-image.component.html',
  styleUrls: ['./nyx-image.component.scss']
})
export class NyxImageComponent extends BaseElement implements OnInit {
  protected elementType = "image";
  @Input() @Bulma() dimension: string;
  @Input() @Bulma() rounded: boolean;
  constructor() {
    super();
   }

  ngOnInit() {
  }  
  
  getImageClass(): string {
    return `${this.rounded}`;
  }

  getClass(): string {
    if(this.bulmaClass) {
      return super.getClass();
    } else {
      return `${this.elementType}${this.dimension}`
    }
  }

}
