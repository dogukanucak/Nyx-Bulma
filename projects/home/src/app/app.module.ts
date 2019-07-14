import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Library Modules
import { NyxElementsModule, NyxLayoutModule, NyxModalPopUpModule } from '../../../../projects/nyx-bulma/src/public_api';
import { ElementsComponent } from './pages/elements/elements.component';
import { NyxBreadCrumbModule } from 'projects/nyx-bulma/src/lib/common/nyx-components/nyx-breadcrumb/nyx-breadcrumb.module';


@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent,

    
  ],
  imports: [
    BrowserModule,    
    NyxElementsModule,   
    NyxLayoutModule,
    NyxModalPopUpModule,
    NyxBreadCrumbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
