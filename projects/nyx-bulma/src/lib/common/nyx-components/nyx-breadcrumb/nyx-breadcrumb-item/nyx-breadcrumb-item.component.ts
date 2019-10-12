import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';

export interface NyxBreadCrumbItem {
  icon: {
    iconColor: string;
    iconClass: string;
    iconSize: string
  };
  text: string;
}

@Component({
  selector: 'nyx-breadcrumb-item',
  templateUrl: './nyx-breadcrumb-item.component.html',
  styleUrls: ['./nyx-breadcrumb-item.component.scss'],
})
export class NyxBreadCrumbItemComponent implements OnInit {
  public isActive: boolean;
  /* Icon styles */
  @Input() iconColor: string;
  @Input() iconClass: string;
  @Input() iconSize: string;
 
  /* BreadCrumb Item Inputs */
  @Input() text: string;
 
  /* Item click */
  @Output() onClick = new EventEmitter<any>();

  
  constructor() { }

  ngOnInit() {
  }

  /* Emit click event */
  onNavigationItemClick(): void {
    this.onClick.emit();
  }
  

}
