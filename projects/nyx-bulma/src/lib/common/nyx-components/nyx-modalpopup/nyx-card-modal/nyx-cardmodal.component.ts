import { Component, OnInit } from '@angular/core';
import { NyxModalPopupComponent } from '../nyx-simple-modal/nyx-modalpopup.component';
import { NyxModalPopUpService } from '../nyx-modal-pop-up.service';

@Component({
  selector: 'nyx-card-modal',
  templateUrl: './nyx-cardmodal.component.html',
  styleUrls: ['./nyx-cardmodal.component.scss']
})
export class NyxCardModalComponent extends NyxModalPopupComponent implements OnInit {

  constructor(protected modalService: NyxModalPopUpService) {
    super(modalService);
    this.modalService.ModalPopUpSubject$.subscribe(options => {
      this.updateStatus(options.isActive);
    });
  }

  ngOnInit() {
  }

}
