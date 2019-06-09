// Nyx-Bulma Elements Module
// Contributers: @Doğukan UÇAK , @Deniz Yamaç

// Bulma Common Elements - https://bulma.io/documentation/elements/


// -------- Development Progress ---------------------------------------------------------
// Nyx-TextBox - STATUS: Not Started , Exclusive
// Nyx-Box - STATUS: Not Started
// Nyx-Button - STATUS: Not Started
// Nyx-Content - STATUS: Not Started
// Nyx-Delete - STATUS: Not Started
// Nyx-Icon - STATUS: Not Started
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


const NYX_COMPONENTS = [
  NyxBoxComponent, NyxButtonComponent
];




@NgModule({
  declarations: [...NYX_COMPONENTS, NyxContentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ...NYX_COMPONENTS
  ]
})
export class NyxElementsModule { }
