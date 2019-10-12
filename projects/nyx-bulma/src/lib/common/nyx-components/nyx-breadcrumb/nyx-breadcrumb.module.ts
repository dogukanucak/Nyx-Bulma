import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NyxBreadCrumbComponent } from './nyx-breadcrumb/nyx-breadcrumb.component';
import { NyxBreadCrumbItemComponent } from './nyx-breadcrumb-item/nyx-breadcrumb-item.component';
import { NyxElementsModule } from '../../nyx-elements/nyx-elements.module';

const NYX_COMPONENTS = [
  NyxBreadCrumbComponent,
  NyxBreadCrumbItemComponent,
]

@NgModule({
  declarations: [...NYX_COMPONENTS],
  imports: [
    CommonModule,   
    NyxElementsModule 
  ],
  exports: [...NYX_COMPONENTS]
})
export class NyxBreadCrumbModule { }
