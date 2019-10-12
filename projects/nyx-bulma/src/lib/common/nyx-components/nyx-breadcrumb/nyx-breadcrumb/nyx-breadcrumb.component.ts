import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { NyxBreadCrumbItem, NyxBreadCrumbItemComponent } from '../nyx-breadcrumb-item/nyx-breadcrumb-item.component';
import { Bulma } from '../../../../decorators/bulma.decorator';
import { BaseElement } from '../../../abstracts/nyx-base-element';



/**
 * BreadCrumb Component Based On: @link https://bulma.io/documentation/components/breadcrumb/
 * Contains ```nyx-breadcrumb-item``` for each section
 */

@Component({
  selector: 'nyx-breadcrumb',
  templateUrl: './nyx-breadcrumb.component.html',
  styleUrls: ['./nyx-breadcrumb.component.scss'],  
})
export class NyxBreadCrumbComponent extends BaseElement implements OnInit, AfterViewInit {
  private readonly EMPTY_ITEM_ERROR_MESSAGE = "No BreadCrumb Item Has Been Specified!";
  protected elementType = "breadcrumb";
  /* Bulma style inputs */
  @Input() @Bulma() alignment: 'centered' | 'right';
  @Input() @Bulma() size: 'small' | 'medium' | 'large';
  @Input() @Bulma("has") separator: 'arrow-separator' | 'bullet-separator' | 'dot-separator' | 'succeeds-separator';
  
  /* BreadCrumbItems */
  @Input() breadCrumbItems: NyxBreadCrumbItem[]; 
  
  /* View Referance Of Items */
  @ViewChildren(NyxBreadCrumbItemComponent) items: QueryList<NyxBreadCrumbItemComponent>;
  constructor() {
    super();
   }

  ngOnInit() {
    // if(this.breadCrumbItems.length == 0) {
    //   throw new Error(this.EMPTY_ITEM_ERROR_MESSAGE);
    // }
    
  }
  
  ngAfterViewInit() {
    
  }

  getClass() {
    /* If Bulma class has been given use ONLY that class */
    if (this.bulmaClass) {
      return super.getClass();
    } else {
      /* Concatenate style properties */     
     return `${this.elementType}${this.alignment}${this.size}${this.separator}`;
    }
  }

}
