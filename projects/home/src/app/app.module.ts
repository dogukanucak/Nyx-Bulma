import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Library Modules
import { NyxElementsModule, NyxLayoutModule } from '../../../../projects/nyx-bulma/src/public_api';
import { ElementsComponent } from './pages/elements/elements.component';


@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent,
    
  ],
  imports: [
    BrowserModule,    
    NyxElementsModule,   
    NyxLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
