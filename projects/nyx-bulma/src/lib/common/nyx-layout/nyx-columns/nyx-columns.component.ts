import { Component, OnInit, Input } from '@angular/core';
import { BaseLayout } from 'projects/nyx-bulma/src/lib/common/nyx-layout/nyx-base-layout';
import { isString } from 'util';

@Component({
  selector: 'nyx-columns',
  templateUrl: './nyx-columns.component.html',
  styleUrls: ['./nyx-columns.component.scss']
})
export class NyxColumnsComponent extends BaseLayout implements OnInit {
  private readonly COLUMNS_CLASS = "columns";
  @Input() isMobile: boolean | string;
  @Input() isDesktop: boolean | string;
  @Input() isGapless: boolean;
  @Input() isMultiLine: boolean;
  @Input() is: string;

  @Input() isTablet: string;
  @Input() isWideScreen: string;
  @Input() isFullHd: string;

  //Options
  @Input() isVerticalCentered: boolean; //vcentered
  @Input() isCentered: boolean; //centered
  constructor() { super(); }

  ngOnInit() {
    this.baseClass = this.COLUMNS_CLASS;
  }
  getClass() {
    let cls = "";
    if (this.isMobile === true)
      cls = " is-mobile";
    else if (isString(this.isMobile))
      cls = " is-" + this.isMobile + '-mobile';
    if (this.isDesktop === true)
      cls = " is-desktop";
    else if (isString(this.isDesktop))
      cls = " is-" + this.isDesktop + '-desktop';
    if (this.isTablet) cls += " is-" + this.isTablet + "-tablet";
    if (this.isWideScreen) cls += " is-" + this.isWideScreen + "-widescreen";
    if (this.isFullHd) cls += " is-" + this.isFullHd + "-fullhd";

    this.externalClass= this.externalClass ? ' '+this.externalClass: '';

    return `${this.baseClass}${this.is ? ' is-variable is-' + this.is : ''}${this.isGapless ? ' is-gapless' : ''}${this.isMultiLine ? ' is-multiline' : ''}${cls}${this.isVerticalCentered ? ' is-vcentered' : ''}${this.isCentered ? ' is-centered' : ''}${this.externalClass}`;
  }
}
