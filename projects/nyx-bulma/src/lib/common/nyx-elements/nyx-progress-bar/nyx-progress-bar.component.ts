import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BaseElement } from "../nyx-base-element";
import { getPercentage } from "../../../utilities/calculators";
import { Bulma } from "../../../decorators/bulma.decorator";

interface ProgressBarChangeEvent {
  value: number;
  percentage: number;  
}

/* 
  Nyx Progress Bar Component
  Based on: https://bulma.io/documentation/elements/progress/ 
  Usage Example: <nyx-progress-bar color='primary' size='normal' [value]='getValue()' max=100></nyx-progress-bar>
*/

@Component({
  selector: "nyx-progress-bar",
  templateUrl: "./nyx-progress-bar.component.html",
  styleUrls: ["./nyx-progress-bar.component.scss"]
})
export class NyxProgressBarComponent extends BaseElement implements OnInit {
  private readonly MAX_INPUT_ERROR = 'Nyx Progress Bar requires a valid maximum value';
  private readonly MISSING_VALUE_WARNING = 'Value has not been set. Indeterminate progress bar will be used';
  private _value: number;
  protected elementType = "progress";
  @Input() @Bulma() color: string;
  @Input() @Bulma() size: string;
  @Input()  max: number;

  get value(): number {
    return this._value;
  }
  @Input("value")
  set value(value: number) {
    this._value = value;
    this.notifyChange();
  }
  @Output() onProgressChanged = new EventEmitter<ProgressBarChangeEvent>();
  constructor() {
    super();    
  }

  ngOnInit() {
    if(!this.max || this.max <=0) {
      throw new Error(this.MAX_INPUT_ERROR);      
    }
    if(!this.value) {
      console.warn(this.MISSING_VALUE_WARNING);
    }
  }
  /* Emits change with value and percentage */
  notifyChange(): void {
    this.onProgressChanged.emit({value: this._value, percentage: getPercentage(this._value, this.max)});
  }

  getClass(): string {
    if (this.bulmaClass) {
      return super.getClass();
    } else {
      return `${this.elementType}${this.color}${this.size}`;
    }
  }
}
