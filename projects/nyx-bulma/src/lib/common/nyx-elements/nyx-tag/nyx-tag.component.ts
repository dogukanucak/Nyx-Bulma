import { Component, OnInit, Input } from '@angular/core';
import { BaseElement } from '../nyx-base-element';
import { getColor, getSize } from '../../../utilities/styleHelpers';

/* 
  Nyx Tag Component
  Based on: https://bulma.io/documentation/elements/tag/
  Usage Example: <nyx-tag text='Hello' color='success' size='medium'></nyx-tag>
*/

@Component({
  selector: 'nyx-tag',
  templateUrl: './nyx-tag.component.html',
  styleUrls: ['./nyx-tag.component.scss']
})
export class NyxTagComponent extends BaseElement implements OnInit {
  protected elementType = 'tag';
  @Input() text: string;
  @Input() color: string;
  @Input() size: string;
  @Input() isRounded: boolean;
  constructor() { 
    super();
  }

  ngOnInit() {
  }

  getClass(): string {
    if(this.bulmaClass) {
      return super.getClass();
    } else {
      let tagClass = `${this.elementType}${getColor(this.color)}${getSize(this.size)}`;
      if(this.isRounded) {
        tagClass = `${tagClass} is-rounded`;
      }
      return tagClass;
    }
  }

}
