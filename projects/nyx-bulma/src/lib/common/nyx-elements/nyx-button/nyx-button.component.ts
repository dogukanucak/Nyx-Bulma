import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nyx-nyx-button',
  templateUrl: './nyx-button.component.html',
  styleUrls: ['./nyx-button.component.scss']
})
export class NyxButtonComponent implements OnInit {
  /* Style properties */
  @Input() bulmaClass: string;
  @Input() color: string;
  @Input() size: 'small' | 'normal' | 'medium' | 'large';
  @Input() display: 'fullwidth';
  @Input() outlined: boolean;
  @Input() disabled: boolean;

  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  /* Emit Button Click Event */
  onButtonClick(): void {
    this.onClick.emit();
  }

  getClass(): string {
    /* If Bulma class has been given use ONLY that class */
    if (this.bulmaClass) {
      return this.bulmaClass;
    } else {
      /* Concatenate style properties */
      return `button${this.getColor()}${this.getSize()}${this.getDisplay()}${this.getOutlined()}`
    }
  }

  private getColor(): string {
    return (this.color) ? ` is-${this.color}` : '';
  }
  private getSize(): string {
    return (this.size) ? ` is-${this.size}` : '';
  }
  private getDisplay(): string {
    return (this.display) ? ` is-${this.display}` : '';
  }
  private getOutlined(): string {
    return (this.outlined) ? ` is-outlined` : '';
  }

}
