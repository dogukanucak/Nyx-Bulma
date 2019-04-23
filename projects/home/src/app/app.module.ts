import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Library Modules
import { NyxElementsModule, NyxLayoutModule } from '../../../../projects/nyx-bulma/src/public_api';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NyxElementsModule,   
    NyxLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
