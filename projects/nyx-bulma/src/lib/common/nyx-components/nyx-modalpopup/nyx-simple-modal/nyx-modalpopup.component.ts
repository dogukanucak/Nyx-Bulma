import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NyxModalPopUpService } from '../nyx-modal-pop-up.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'nyx-modalpopup',
  templateUrl: './nyx-modalpopup.component.html',
  styleUrls: ['./nyx-modalpopup.component.scss']
})
export class NyxModalPopupComponent implements OnInit, OnDestroy {  
  private modalPopUpSubscription: Subscription;
  protected isOpen = false;
  
  @Output() onModalPopUpOpen = new EventEmitter<void>();
  @Output() onModalPopUpClose = new EventEmitter<void>();


  constructor(protected modalService: NyxModalPopUpService ) { }

  ngOnInit() {
    // Listen for modal pop up subject updates
    this.modalPopUpSubscription = this.modalService.ModalPopUpSubject$.subscribe(options => {
      this.updateStatus(options.isActive);
    });
  }

  ngOnDestroy(): void {
    this.modalPopUpSubscription.unsubscribe();
  }

  protected updateStatus(isActive: boolean): void {
    if(isActive) {     
      this.onModalPopUpOpen.emit();
    } else {
      this.onModalPopUpClose.emit();
    }
    this.isOpen = isActive;
  }

}
