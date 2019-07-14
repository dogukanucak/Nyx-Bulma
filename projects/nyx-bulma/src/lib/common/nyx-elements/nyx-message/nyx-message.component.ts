import { Component, OnInit, Input, ElementRef, AfterViewInit, ContentChild } from '@angular/core';
import { BaseElement } from '../nyx-base-element';
import { Bulma } from '../../../decorators/bulma.decorator';



/**
 * Nyx-Message Component based on Bulma Message Component: { @link https://bulma.io/documentation/components/message/ }
 * TODO: Add Example usage here...
 * 
 */

@Component({
  selector: 'nyx-message',
  templateUrl: './nyx-message.component.html',
  styleUrls: ['./nyx-message.component.scss']
})
export class NyxMessageComponent extends BaseElement implements OnInit {
  protected elementType = "message";
  @Input() @Bulma() color: string;
  @Input() @Bulma() size: string;
  
  constructor() {
    super();
  }

  ngOnInit() {
   
  }  

  getClass(): string {
    return (this.bulmaClass)? super.getClass() : `${this.elementType} ${this.color} ${this.size}`;
  }

}
