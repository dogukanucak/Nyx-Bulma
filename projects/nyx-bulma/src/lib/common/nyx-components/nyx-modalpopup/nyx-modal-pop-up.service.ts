// Nyx Modal Pop Up Service
// Manage modal pop up settings
// Use NotifiyModalPopUp method to update modal pop status
// Listen ModalPopUpSubject to get notifications

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NyxModalPopUpService {
  private _isOpen = false;
  private _options: ModalPopUpOptions = {isActive: false};
  public ModalPopUpSubject$ = new BehaviorSubject<ModalPopUpOptions>(this._options);
  constructor() {} 
 
  public NotifyModalPopUp(options: ModalPopUpOptions): void {
    this.ModalPopUpSubject$.next(options);
  }

}


interface ModalPopUpOptions {
  isActive: boolean;
}