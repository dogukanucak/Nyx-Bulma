import { Component, OnInit, Input } from '@angular/core';
import { BaseElement } from '../../abstracts/nyx-base-element';
import { Bulma } from '../../../decorators/bulma.decorator';

declare type TitleFormat = 'title' | 'subtitle';
declare type TitleSize = '1' | '2' | '3' | '4' | '5' | '6';

/** 
*  Nyx Title Component
*  Based on: {@link https://bulma.io/documentation/elements/title/}
*  @example
*  Usage Example: ```<nyx-title size='3' text='Example Title'></nyx-title>```
*/

@Component({
  selector: 'nyx-title',
  templateUrl: './nyx-title.component.html',
  styleUrls: ['./nyx-title.component.scss']
})
export class NyxTitleComponent extends BaseElement implements OnInit {  
  @Input() @Bulma() size: TitleSize;  
  @Input() @Bulma() spaced: boolean;
  @Input() titleType: TitleFormat = 'title';  
  @Input() text: string;
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
      return `${this.titleType}${this.size}${this.spaced}`;      
    }
  }

}
