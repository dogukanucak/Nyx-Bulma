import { Component, OnInit, Host, Optional, SkipSelf, Input, ElementRef, HostBinding } from '@angular/core';
import { NyxColumnsComponent } from 'projects/nyx-bulma/src/lib/common/nyx-layout/nyx-columns/nyx-columns.component';
import { BaseLayout } from 'projects/nyx-bulma/src/lib/common/nyx-layout/nyx-base-layout';
import { isString } from 'util';

@Component({
  selector: 'nyx-column',
  templateUrl: './nyx-column.component.html',
  styleUrls: ['./nyx-column.component.scss']
})
export class NyxColumnComponent extends BaseLayout implements OnInit {
  private readonly MISSING_COLUMNS_COMPONENT = "NyxColumnComponent should be inside of the NyxColumnsComponent";
  private readonly COLUMN_CLASS = "column";

  /* Is */
  @Input() is = "";
  @Input() isNarrow: string | boolean; // ??
  
  
  /* Is-Breakpoints */

  @Input() isMobile: string;
  @Input() isTablet: string;
  @Input() isDesktop: string;
  @Input() isWideScreen: string;
  @Input() isFullHd: string;

  /* Offset */
  @Input() isOffset = "";

  /* Host Binding for Classes*/
  @HostBinding('class') class;

  constructor(@Optional() @SkipSelf() @Host() private parentColumnsComponent: NyxColumnsComponent,
              @Optional() @SkipSelf() private parentColumnComponent: NyxColumnComponent,
              private elementRef: ElementRef) {
    super();
    if (!parentColumnsComponent || (parentColumnsComponent && parentColumnComponent && parentColumnsComponent == parentColumnComponent.parentColumnsComponent )) throw new Error(this.MISSING_COLUMNS_COMPONENT+ ' => '+ elementRef.nativeElement.outerHTML);
  }

  ngOnInit() {
    this.baseClass = this.COLUMN_CLASS;
    this.class = this.getClass();
  }
  
  getClass() {
    //return `${this.baseClass} ${ this.is.length > 0 ? this.is : ( (this.isNarrow === true) ? 'is-narrow' : ( isString(this.isNarrow) ? 'is-narrow-' + this.isNarrow : '') )} ${this.isOffset} ${this.externalClass}`;
    let cls = "";
    if (this.is)
      cls = this.is;
    else {
      if (this.isNarrow === true)
         cls=" is-narrow";
      else if(isString(this.isNarrow))
        cls=" is-narrow-" + this.isNarrow;
    }
    if(this.isMobile) cls+=" is-"+this.isMobile+"-mobile";
    if(this.isDesktop) cls+=" is-"+this.isDesktop+"-desktop";
    if(this.isTablet) cls+=" is-"+this.isTablet+"-tablet";
    if(this.isWideScreen) cls+=" is-"+this.isWideScreen+"-widescreen";
    if(this.isFullHd) cls+=" is-"+this.isFullHd+"-fullhd";

    this.isOffset=this.isOffset ? ' '+this.isOffset : '';
    return `${this.baseClass}${cls}${this.isOffset}${this.externalClass}`;
  }
}
