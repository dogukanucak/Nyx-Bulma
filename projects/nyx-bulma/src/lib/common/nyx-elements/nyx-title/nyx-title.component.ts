import { Component, OnInit, Input } from '@angular/core';
import { BaseElement } from '../nyx-base-element';
import { getSize } from '../../../utilities/styleHelpers';

declare type TitleFormat = 'title' | 'subtitle';
declare type TitleSize = '1' | '2' | '3' | '4' | '5' | '6';

/* 
  Nyx Title Component
  Based on: https://bulma.io/documentation/elements/title/
  Usage Example: <nyx-title size='3' text='Example Title'></nyx-title>
*/

@Component({
  selector: 'nyx-title',
  templateUrl: './nyx-title.component.html',
  styleUrls: ['./nyx-title.component.scss']
})
export class NyxTitleComponent extends BaseElement implements OnInit {  
  @Input() titleType: TitleFormat = 'title';
  @Input() size: TitleSize;
  @Input() text: string;
  @Input() isSpaced: boolean;
  constructor() { 
    super();
  }

  ngOnInit() {
    this.elementType = this.titleType;
  }

  getClass(): string {
    if(this.bulmaClass) {
      return super.getClass();
    } else {
      let titleClass = `${this.titleType}${getSize(this.size)}`;
      if(this.isSpaced) {
        titleClass = `${titleClass} is-spaced`
      }
      return titleClass;
    }
  }

}
