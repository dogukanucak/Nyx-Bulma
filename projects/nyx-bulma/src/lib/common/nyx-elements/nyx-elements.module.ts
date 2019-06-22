


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NyxBoxComponent } from './nyx-box/nyx-box.component';
import { NyxButtonComponent } from './nyx-button/nyx-button.component';
import { NyxContentComponent } from './nyx-content/nyx-content.component';
import { NyxDeleteButtonComponent } from './nyx-delete-button/nyx-delete-button.component';
import { NyxIconComponent } from './nyx-icon/nyx-icon.component';
import { NyxImageComponent } from './nyx-image/nyx-image.component';
import { NyxNotificationComponent } from './nyx-notification/nyx-notification.component';
import { NyxProgressBarComponent } from './nyx-progress-bar/nyx-progress-bar.component';
import { NyxTagComponent } from './nyx-tag/nyx-tag.component';
import { NyxTitleComponent } from './nyx-title/nyx-title.component';


const NYX_COMPONENTS = [
  NyxBoxComponent, NyxButtonComponent, NyxContentComponent, NyxDeleteButtonComponent, NyxIconComponent, NyxImageComponent,
  NyxNotificationComponent, NyxProgressBarComponent, NyxTagComponent, NyxTitleComponent
];


@NgModule({
  declarations: [...NYX_COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [
    ...NYX_COMPONENTS
  ]
})
export class NyxElementsModule { }
