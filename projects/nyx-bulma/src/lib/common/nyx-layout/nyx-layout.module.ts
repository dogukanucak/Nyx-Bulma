import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NyxColumnComponent } from './nyx-column/nyx-column.component';
import { NyxColumnsComponent } from './nyx-columns/nyx-columns.component';
import { NyxContainerComponent } from './nyx-container/nyx-container.component';
import { NyxLevelComponent } from './nyx-level/nyx-level.component';
import { NyxLevelLeftComponent } from './nyx-level-left/nyx-level-left.component';
import { NyxLevelRightComponent } from './nyx-level-right/nyx-level-right.component';
import { NyxLevelItemComponent } from './nyx-level-item/nyx-level-item.component';

const NYX_LAYOUT_COMPONENTS = [
  NyxColumnComponent,
  NyxColumnsComponent,
  NyxContainerComponent,
  NyxLevelComponent,
  NyxLevelItemComponent,
  NyxLevelLeftComponent,
  NyxLevelRightComponent
];

@NgModule({
  declarations: [...NYX_LAYOUT_COMPONENTS, NyxContainerComponent, NyxLevelComponent, NyxLevelLeftComponent, NyxLevelRightComponent, NyxLevelItemComponent],
  imports: [
    CommonModule
  ],
  exports: [...NYX_LAYOUT_COMPONENTS]
})
export class NyxLayoutModule { }
