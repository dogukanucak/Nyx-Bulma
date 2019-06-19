import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NyxModalPopupComponent } from './nyx-simple-modal/nyx-modalpopup.component';
import { NyxModalPopUpService } from './nyx-modal-pop-up.service';
import { NyxCardModalComponent } from './nyx-card-modal/nyx-cardmodal.component';

const NYX_COMPONENTS = [
  NyxModalPopupComponent,
  NyxCardModalComponent  
];

const NYX_SERVICES = [
  NyxModalPopUpService
]

@NgModule({
  declarations: [...NYX_COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...NYX_COMPONENTS],
  providers: [...NYX_SERVICES]
})
export class NyxModalPopUpModule { }
