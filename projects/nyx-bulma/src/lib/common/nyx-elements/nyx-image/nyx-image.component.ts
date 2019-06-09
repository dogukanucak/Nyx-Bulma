import { Component, OnInit, Input } from '@angular/core';
import { BaseElement } from '../nyx-base-element';
import { getSize } from '../../../utilities/styleHelpers';

/* 
  Nyx Image Component
  Based On: https://bulma.io/documentation/elements/image/ 
*/

@Component({
  selector: 'nyx-image',
  templateUrl: './nyx-image.component.html',
  styleUrls: ['./nyx-image.component.scss']
})
export class NyxImageComponent extends BaseElement implements OnInit {
  protected elementType = "image";
  @Input() dimension: string;
  @Input() isRounded: boolean;
  constructor() {
    super();
   }

  ngOnInit() {
  }  
  
  getImageClass(): string {
    return (this.isRounded) ? 'is-rounded' : ''; 
  }

  getClass(): string {
    if(this.bulmaClass) {
      return super.getClass();
    } else {
      return `${this.elementType}${getSize(this.dimension)}`
    }
  }

}
