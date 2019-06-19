import { Component, OnInit } from '@angular/core';
import { NyxModalPopUpService } from 'projects/nyx-bulma/src/public_api';

@Component({
  selector: 'home-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

  constructor(private modalService: NyxModalPopUpService) { }

  ngOnInit() {
  }

  // Modal Pop Up Test Button Click
  openPopUp(): void {
    this.modalService.NotifyModalPopUp({isActive: true})
  }
  closePopUp(): void {
    this.modalService.NotifyModalPopUp({isActive: false});
  }
}
