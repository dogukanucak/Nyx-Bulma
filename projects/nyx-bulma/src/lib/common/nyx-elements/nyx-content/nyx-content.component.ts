import { Component, OnInit, Input } from '@angular/core';
import { BaseElement } from '../nyx-base-element';
import { Bulma } from '../../../decorators/bulma.decorator';

@Component({
  selector: 'nyx-content',
  templateUrl: './nyx-content.component.html',
  styleUrls: ['./nyx-content.component.scss']
})
export class NyxContentComponent extends BaseElement implements OnInit {
  protected elementType = "content";  
  @Input() @Bulma() size: 'small' | 'normal' | 'medium' | 'large';

  constructor() {
    super();
   }

  ngOnInit() {}

  getClass(): string {
    if(this.bulmaClass) {
      return super.getClass();
    } else {
      return `${this.elementType}${this.size}`
    }
  }
}
