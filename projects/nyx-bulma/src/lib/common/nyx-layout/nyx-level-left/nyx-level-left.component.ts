import { Component, OnInit, SkipSelf, Host, Optional, ElementRef } from '@angular/core';
import { BaseLayout } from 'projects/nyx-bulma/src/lib/common/nyx-layout/nyx-base-layout';
import { NyxLevelComponent } from 'projects/nyx-bulma/src/lib/common/nyx-layout/nyx-level/nyx-level.component';

@Component({
  selector: 'nyx-level-left',
  templateUrl: './nyx-level-left.component.html',
  styleUrls: ['./nyx-level-left.component.scss']
})
export class NyxLevelLeftComponent extends BaseLayout implements OnInit {
  readonly baseClass = "level-left";
  readonly MISSING_LEVEL_COMPONENT = "NyxLevelLeft Component should be inside of NyxLevelComponent";
  constructor(@Optional() @SkipSelf() @Host() parentLevelComponent: NyxLevelComponent,
    private elementRef: ElementRef) {
    super();
    if (!parentLevelComponent) throw new Error(this.MISSING_LEVEL_COMPONENT + ' => ' + elementRef.nativeElement.outerHTML);
  }

  ngOnInit() {
  }

}
