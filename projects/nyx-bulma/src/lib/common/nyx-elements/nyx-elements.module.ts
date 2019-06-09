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
// Nyx-Image - STATUS: Not Started
// Nyx-Notification - STATUS: Not Started
// Nyx-Progress-Bar - STATUS: Not Started
// Nyx-Table - STATUS: Not Started
// Nyx-Tag - STATUS: Not Started
// Nyx-Title - STATUS: Not Started
// ----------------------------------------------------------------------------------------



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NyxBoxComponent } from './nyx-box/nyx-box.component';
import { NyxButtonComponent } from './nyx-button/nyx-button.component';
import { NyxContentComponent } from './nyx-content/nyx-content.component';
import { NyxDeleteButtonComponent } from './nyx-delete-button/nyx-delete-button.component';
import { NyxIconComponent } from './nyx-icon/nyx-icon.component';


const NYX_COMPONENTS = [
  NyxBoxComponent, NyxButtonComponent, NyxContentComponent, NyxDeleteButtonComponent, NyxIconComponent
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
