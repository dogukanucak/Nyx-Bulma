// Nyx-Bulma Elements Module
// Contributers: @Doğukan UÇAK , @Deniz Yamaç

// Bulma Common Elements - https://bulma.io/documentation/elements/


// -------- Development Progress ---------------------------------------------------------
// Nyx-TextBox - STATUS: Not Started , Exclusive
// Nyx-Box - STATUS: Completed , Requires Test
// Nyx-Button - STATUS: Completed , Requires Test
// Nyx-Content - STATUS: Completed , Requires Test
// Nyx-Delete - STATUS: Completed , Requires Test
// Nyx-Icon - STATUS: Completed , Requires Test
// Nyx-Image - STATUS: Completed , Requires Test
// Nyx-Notification - STATUS: Initially completed, requires more resarch to find better way for toogle (open/close notification)
// Nyx-Progress-Bar - STATUS: Requires Test and Review
// Nyx-Table - STATUS: Not Started
// Nyx-Tag - STATUS: Completed , Requires Test
// Nyx-Title - STATUS: Not Started
// ----------------------------------------------------------------------------------------



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
