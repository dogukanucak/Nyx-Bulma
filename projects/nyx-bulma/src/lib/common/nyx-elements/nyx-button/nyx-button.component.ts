import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseElement } from '../nyx-base-element';
import { Bulma } from '../../../decorators/bulma.decorator';

@Component({
  selector: 'nyx-button',
  templateUrl: './nyx-button.component.html',
  styleUrls: ['./nyx-button.component.scss']
})
export class NyxButtonComponent extends BaseElement implements OnInit {
  protected elementType = "button";
  /* Style properties */  
  @Input() @Bulma() color: string;
  @Input() @Bulma() size: 'small' | 'normal' | 'medium' | 'large';
  @Input() @Bulma() display: 'fullwidth';
  @Input() @Bulma() outlined: boolean;
  @Input() @Bulma() rounded: boolean;

  @Input() text: string;

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
     return `${this.elementType}${this.color}${this.size}${this.display}${this.outlined}${this.rounded}`;
    }
  }
}
