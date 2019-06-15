import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseElement } from '../nyx-base-element';
import { Bulma } from '../../../decorators/bulma.decorator';

/* 
  Nyx Icon Component
  Based On: https://bulma.io/documentation/elements/icon/
  Supports Font Awesome classes through Bulma Framework
  Display empty icon unless an icon class is specified 
*/
@Component({
  selector: 'nyx-icon',
  templateUrl: './nyx-icon.component.html',
  styleUrls: ['./nyx-icon.component.scss']
})
export class NyxIconComponent extends BaseElement implements OnInit {
  private readonly emptyIcon = 'fas fa-empty-set';
  protected elementType = 'icon';

  /* Style properties */  
  @Input() @Bulma() color: string;
  @Input() @Bulma() size: 'small' | 'normal' | 'medium' | 'large';
  /* Icon class, example: fas fa-home */
  @Input() iconClass: string;

  @Output() onClick = new EventEmitter<any>();
  constructor() { 
    super();
  }

  ngOnInit() {
  }

  onIconClick(): void {
    this.onClick.emit();
  }

  getClass(): string  {
    if(this.bulmaClass) {
      return super.getClass();
    } else {
      return `${this.elementType}${this.color}${this.size}}`
    }
  }

  getIconClass(): string {
    return this.iconClass || this.emptyIcon;
  }
}
