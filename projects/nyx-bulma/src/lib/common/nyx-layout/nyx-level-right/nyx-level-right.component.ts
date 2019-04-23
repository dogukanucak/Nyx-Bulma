import { Component, OnInit, Optional, SkipSelf, Host, ElementRef } from '@angular/core';
import { BaseLayout } from 'projects/nyx-bulma/src/lib/common/nyx-layout/nyx-base-layout';
import { NyxLevelComponent } from 'projects/nyx-bulma/src/lib/common/nyx-layout/nyx-level/nyx-level.component';

@Component({
  selector: 'nyx-level-right',
  templateUrl: './nyx-level-right.component.html',
  styleUrls: ['./nyx-level-right.component.scss']
})
export class NyxLevelRightComponent extends BaseLayout implements OnInit {
  readonly baseClass = "level-right";
  readonly MISSING_LEVEL_COMPONENT = "NyxLevelRight Component should be inside of NyxLevelComponent";
  constructor(@Optional() @SkipSelf() @Host() parentLevelComponent: NyxLevelComponent,
    private elementRef: ElementRef) {
    super();
    if (!parentLevelComponent) throw new Error(this.MISSING_LEVEL_COMPONENT + ' => ' + elementRef.nativeElement.outerHTML);
  }

  ngOnInit() {
  }

}
