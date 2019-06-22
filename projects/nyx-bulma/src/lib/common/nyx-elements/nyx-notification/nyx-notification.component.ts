import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseElement } from '../nyx-base-element';
import { Bulma } from '../../../decorators/bulma.decorator';

/** 
*  Nyx Notification Container Component
*  Based on: {@link https://bulma.io/documentation/elements/notification/} 
*  @example
*  Usage:
*  ```
*      <nyx-notification type='primary'>
*            <!-- Any Content Inside -->
*       </nyx-notification> 
*  ```
*/

@Component({
  selector: 'nyx-notification',
  templateUrl: './nyx-notification.component.html',
  styleUrls: ['./nyx-notification.component.scss']
})
export class NyxNotificationComponent extends BaseElement implements OnInit {
  protected elementType = 'notification';
  isEnabled = true;
  @Input() @Bulma() type: string;
  @Output() onClose = new EventEmitter<any>();
  constructor() { 
    super();
  }

  ngOnInit() {
  }

  closeNotification(): void {
    // Set component content to invisible, may need to find a better way to remove notification
    // https://stackoverflow.com/questions/42884215/can-a-component-remove-its-own-template-and-put-it-back-conditionally/42988591
    this.isEnabled = false;
    this.onClose.emit();
  }

  getClass(): string {
    return this.bulmaClass || `${this.elementType}${this.type}`;
  }

}
