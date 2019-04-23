import { Component, OnInit, Optional, SkipSelf, Host, ElementRef } from '@angular/core';
import { BaseLayout } from 'projects/nyx-bulma/src/lib/common/nyx-layout/nyx-base-layout';
import { NyxLevelLeftComponent } from 'projects/nyx-bulma/src/lib/common/nyx-layout/nyx-level-left/nyx-level-left.component';
import { NyxLevelRightComponent } from 'projects/nyx-bulma/src/lib/common/nyx-layout/nyx-level-right/nyx-level-right.component';

@Component({
  selector: 'nyx-level-item',
  templateUrl: './nyx-level-item.component.html',
  styleUrls: ['./nyx-level-item.component.scss']
})
export class NyxLevelItemComponent extends BaseLayout implements OnInit {
  readonly baseClass = "level-item";
  readonly MISSING_LEVEL_COMPONENT = "NyxLevelItem Component should be inside of NyxLevelLeftComponent or NyxLevelRightComponent";
  constructor(@Optional() @SkipSelf() @Host() parentLevelLeftComponent: NyxLevelLeftComponent,
              @Optional() @SkipSelf() @Host() parentLevelRightComponent: NyxLevelRightComponent,
              private elementRef: ElementRef) {
    super();
    if (!parentLevelLeftComponent && !parentLevelRightComponent) throw new Error(this.MISSING_LEVEL_COMPONENT + ' => ' + elementRef.nativeElement.outerHTML);
  }


  ngOnInit() {
  }

}
