import { Component, OnInit, Host, Optional, SkipSelf, Input, ElementRef, HostBinding } from '@angular/core';
import { BaseLayout } from '../nyx-base-layout';
import { NyxColumnsComponent } from '../nyx-columns/nyx-columns.component';
import { Bulma } from 'projects/nyx-bulma/src/lib/decorators/bulma.decorator';
import { Size, Platform } from 'projects/nyx-bulma/src/lib/types/bulma.types';

@Component({
  selector: 'nyx-column',
  templateUrl: './nyx-column.component.html',
  styleUrls: ['./nyx-column.component.scss']
})
export class NyxColumnComponent extends BaseLayout implements OnInit {
  private readonly MISSING_COLUMNS_COMPONENT = "NyxColumnComponent should be inside of the NyxColumnsComponent";
  private readonly COLUMN_CLASS = "column";
  /**
   * Each modifier value is set after how many columns you want out of 12.
   * 
   * @example
   * 
   * ``` If you want 7 columns out of 12, use is=7  ``` 
   * 
  */
  @Input() @Bulma() is: Size;
  /**
     * Each modifier value is set after how many columns you want out of 12.
     * 
     * @example
     * 
     * ``` If you want 7 columns out of 12, use is=7  ``` 
     * 
    */
  @Input() @Bulma(null, "mobile") isMobile: Size;
  /**
     * Each modifier value is set after how many columns you want out of 12.
     * 
     * @example
     * 
     * ``` If you want 7 columns out of 12, use is=7  ``` 
     * 
    */
  @Input() @Bulma(null, "tablet") isTablet: Size;
  /**
   * Each modifier value is set after how many columns you want out of 12.
   * 
   * @example
   * 
   * ``` If you want 7 columns out of 12, use is=7  ``` 
   * 
  */
  @Input() @Bulma(null, "touch") isTouch: Size;
  /**
   * Each modifier value is set after how many columns you want out of 12.
   * 
   * @example
   * 
   * ``` If you want 7 columns out of 12, use is=7  ``` 
   * 
  */
  @Input() @Bulma(null, "desktop") isDesktop: Size;
  /**
 * Each modifier value is set after how many columns you want out of 12.
 * 
 * @example
 * 
 * ``` If you want 7 columns out of 12, use is=7  ``` 
 * 
*/

  @Input() @Bulma(null, "widescreen") isWideScreen: Size;
  /**
 * Each modifier value is set after how many columns you want out of 12.
 * 
 * @example
 * 
 * ``` If you want 7 columns out of 12, use is=7  ``` 
 * 
*/

  @Input() @Bulma(null, "fullhd") isFullHd: Size;
  /**
   * If you want a column to only take the space it needs, use the narrow modifier. The other column(s) will fill up the remaining space.
   * As for the size modifiers, you can have narrow columns for different breakpoints.
   * 
   * @example 
   * 
   * ``` narrow=true , narrow="mobile" ``` 
   * 
   * narrow=true -> is-narrow
   * narrow="mobile" -> is-narrow-mobile
  */
  @Input() @Bulma("is-narrow", "") narrow: Platform | boolean;

 /**
   * While you can use empty columns (like <nyx-column></nyx-column>) to create horizontal space around nyx-column elements
   * You can also use offset modifiers.
   * 
   * @example 
   * 
   * ``` offset=5 , offset="two-fifths" ``` 
   * 
  */  @Input() @Bulma("is-offset") offset: Size;

  /* Host Binding for Classes*/
  @HostBinding('class') class;

  constructor(@Optional() @SkipSelf() @Host() private parentColumnsComponent: NyxColumnsComponent,
    @Optional() @SkipSelf() private parentColumnComponent: NyxColumnComponent,
    private elementRef: ElementRef) {
    super();
    if (!parentColumnsComponent || (parentColumnsComponent && parentColumnComponent && parentColumnsComponent == parentColumnComponent.parentColumnsComponent))
      throw new Error(this.MISSING_COLUMNS_COMPONENT + ' => ' + elementRef.nativeElement.outerHTML);
  }

  ngOnInit() {
    this.baseClass = this.COLUMN_CLASS;
    this.class = this.getClass();
  }

  getClass() {
    return `${this.baseClass}${this.is}${this.narrow}${this.offset}`;
  }
}
