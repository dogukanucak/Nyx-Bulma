import { Component, OnInit, Input } from '@angular/core';
import { BaseElement } from '../nyx-base-element';
import { getSize } from '../../../utilities/styleHelpers';

@Component({
  selector: 'nyx-delete-button',
  templateUrl: './nyx-delete-button.component.html',
  styleUrls: ['./nyx-delete-button.component.scss']
})
export class NyxDeleteButtonComponent extends BaseElement implements OnInit {
  protected elementType = 'delete';
  @Input() size: 'small' | 'normal' | 'medium' | 'large';
  constructor() { 
    super();
  }

  ngOnInit() {
  }
  
  getClass(): string {
    if(this.bulmaClass) {
      return super.getClass();
    } else {
      return `${this.elementType}${getSize(this.size)}`
    }
  }

}
