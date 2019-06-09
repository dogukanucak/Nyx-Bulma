import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseElement } from '../nyx-base-element';
import { getColor, getSize, getDisplay, getOutlined } from '../../../utilities/styleHelpers';

@Component({
  selector: 'nyx-nyx-button',
  templateUrl: './nyx-button.component.html',
  styleUrls: ['./nyx-button.component.scss']
})
export class NyxButtonComponent extends BaseElement implements OnInit {
  protected elementType = "button";
  /* Style properties */  
  @Input() color: string;
  @Input() size: 'small' | 'normal' | 'medium' | 'large';
  @Input() display: 'fullwidth';
  @Input() outlined: boolean;

  @Output() onClick = new EventEmitter<any>();

  constructor() { 
    super();
  }

  ngOnInit() {
  }

  /* Emit Button Click Event */
  onButtonClick(): void {
    this.onClick.emit();
  }

  getClass(): string {
    /* If Bulma class has been given use ONLY that class */
    if (this.bulmaClass) {
      return super.getClass();
    } else {
      /* Concatenate style properties */
      return `${this.elementType}${getColor(this.color)}${getSize(this.size)}${getDisplay(this.display)}${getOutlined(this.outlined)}`
    }
  }
}
