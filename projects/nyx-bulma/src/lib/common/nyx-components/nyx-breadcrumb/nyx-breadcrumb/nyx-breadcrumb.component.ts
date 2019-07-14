import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { NyxBreadCrumbItem, NyxBreadCrumbItemComponent } from '../nyx-breadcrumb-item/nyx-breadcrumb-item.component';
import { Bulma } from '../../../../decorators/bulma.decorator';


/**
 * BreadCrumb Component Based On: @link https://bulma.io/documentation/components/breadcrumb/
 * Contains ```nyx-breadcrumb-item``` for each section
 */

@Component({
  selector: 'nyx-breadcrumb',
  templateUrl: './nyx-breadcrumb.component.html',
  styleUrls: ['./nyx-breadcrumb.component.scss']
})
export class NyxBreadCrumbComponent implements OnInit, AfterViewInit {
  private readonly EMPTY_ITEM_ERROR_MESSAGE = "No BreadCrumb Item Has Been Specified!";
  /* Bulma style inputs */
  @Input() @Bulma() alignment: 'centered' | 'right';
  @Input() @Bulma() size: 'small' | 'medium' | 'large';
  @Input() @Bulma("","has") separator: 'arrow-separator' | 'bullet-separator' | 'dot-separator' | 'succeeds-separator';
  
  /* BreadCrumbItems */
  @Input() breadCrumbItems: NyxBreadCrumbItem[]; 
  
  /* View Referance Of Items */
  @ViewChildren(NyxBreadCrumbItemComponent) items: QueryList<NyxBreadCrumbItemComponent>;
  constructor() { }

  ngOnInit() {
    // if(this.breadCrumbItems.length == 0) {
    //   throw new Error(this.EMPTY_ITEM_ERROR_MESSAGE);
    // }
    
  }
  ngAfterViewInit() {
    console.log("Items => ", this.items);
    console.log("First Item => ", this.items.first.text);
  }

}
