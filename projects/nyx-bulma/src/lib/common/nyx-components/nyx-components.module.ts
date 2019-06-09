import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NyxModalPopupComponent } from './nyx-modalpopup/nyx-modalpopup.component';

const NYX_COMPONENTS = [
  NyxModalPopupComponent
];

@NgModule({
  declarations: [...NYX_COMPONENTS],
  imports: [
    CommonModule
  ]
})
export class NyxComponentsModule { }
