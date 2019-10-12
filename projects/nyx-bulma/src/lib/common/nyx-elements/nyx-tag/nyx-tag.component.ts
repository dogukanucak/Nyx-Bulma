import { Component, OnInit, Input } from '@angular/core';
import { BaseElement } from '../../abstracts/nyx-base-element';
import { Bulma } from '../../../decorators/bulma.decorator';

/**  
*  Nyx Tag Component
*  Based on: {@link https://bulma.io/documentation/elements/tag/}
*  @example
*  Usage Example: ```<nyx-tag text='Hello' color='success' size='medium'></nyx-tag>```
*/

@Component({
  selector: 'nyx-tag',
  templateUrl: './nyx-tag.component.html',
  styleUrls: ['./nyx-tag.component.scss']
})
export class NyxTagComponent extends BaseElement implements OnInit {
  protected elementType = 'tag';
  @Input() @Bulma() color: string;
  @Input() @Bulma() size: string;
  @Input() @Bulma() rounded: boolean;
  @Input() text: string;  
  constructor() { 
    super();
  }

  ngOnInit() {
  }

  getClass(): string {
    if(this.bulmaClass) {
      return super.getClass();
    } else {
       return `${this.elementType}${this.color}${this.size}${this.rounded}`;      
    }
  }

}
