import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Library Modules
import { NyxElementsModule, NyxLayoutModule, NyxModalPopUpModule } from '../../../../projects/nyx-bulma/src/public_api';
import { ElementsComponent } from './pages/elements/elements.component';


@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent,
    
  ],
  imports: [
    BrowserModule,    
    NyxElementsModule,   
    NyxLayoutModule,
    NyxModalPopUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
