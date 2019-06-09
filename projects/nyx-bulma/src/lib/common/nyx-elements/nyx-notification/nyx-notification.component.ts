import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseElement } from '../nyx-base-element';
import { getColor } from '../../../utilities/styleHelpers';

/* 
  Nyx Notification Container Component
  Based on: https://bulma.io/documentation/elements/notification/ 
  Usage: <nyx-notification type='primary'>
            <!-- Any Content Inside -->
         </nyx-notification> 
*/

@Component({
  selector: 'nyx-notification',
  templateUrl: './nyx-notification.component.html',
  styleUrls: ['./nyx-notification.component.scss']
})
export class NyxNotificationComponent extends BaseElement implements OnInit {
  protected elementType = 'notification';
  isEnabled = true;
  @Input() type: string;
  @Output() onClose = new EventEmitter<any>();
  constructor() { 
    super();
  }

  ngOnInit() {
  }

  onNotificationClose(): void {
    // Set component content to invisible, may need to find a better way to remove notification
    this.isEnabled = false;
    this.onClose.emit();
  }

  getClass(): string {
    return this.bulmaClass || `${this.elementType}${getColor(this.type)}`;
  }

}
