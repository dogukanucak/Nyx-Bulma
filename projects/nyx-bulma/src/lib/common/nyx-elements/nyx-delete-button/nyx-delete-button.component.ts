import { Component, OnInit, Input } from '@angular/core';
import { BaseElement } from '../nyx-base-element';
import { Bulma } from '../../../decorators/bulma.decorator';

/**
* Delete button based on Bulma Box Element: {@link https://bulma.io/documentation/elements/delete/}* 
* @example 
* Example Nyx-Delete-Button Usage:
* ```
* <nyx-delete-button size="large"></nyx-delete-button>
* ```
*
*/

@Component({
  selector: 'nyx-delete-button',
  templateUrl: './nyx-delete-button.component.html',
  styleUrls: ['./nyx-delete-button.component.scss']
})
export class NyxDeleteButtonComponent extends BaseElement implements OnInit {
  protected elementType = 'delete';
  @Input() @Bulma() size: 'small' | 'normal' | 'medium' | 'large';
  constructor() { 
    super();
  }

  ngOnInit() {
  }
  
  getClass(): string {
    if(this.bulmaClass) {
      return super.getClass();
    } else {
      return `${this.elementType}${this.size}`
    }
  }
}
