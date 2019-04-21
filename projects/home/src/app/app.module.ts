import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Library Modules
import { NyxElementsModule } from '@nyx-bulma/common';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NyxElementsModule,   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
