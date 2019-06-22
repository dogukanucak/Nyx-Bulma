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
  /**
   * Stores the state of ModalPopUp
   * Subscribe to subject to listen for changes
   * @example
   * ```
   * this.modalService.ModalPopUpSubject$.subscribe(options => {
   * // Write your code here...
   * });
   * ```
   * 
   */
  public ModalPopUpSubject$ = new BehaviorSubject<ModalPopUpOptions>(this._options);
  constructor() {} 
 
/**
 *  Notify modal pop up for updates
 *  @param options Send updated options
 *  @example 
 *  ```
 *  Example Usage: Open Modal Pop Up
 *  this.NotifyModalPopUp({isActive: true});
 *  ```
 */
  public NotifyModalPopUp(options: ModalPopUpOptions): void {
    this.ModalPopUpSubject$.next(options);
  }

}


interface ModalPopUpOptions {
  isActive: boolean;
}