import { Component, OnInit } from '@angular/core';
import { BaseLayout } from '../nyx-base-layout';


@Component({
  selector: 'nyx-container',
  templateUrl: './nyx-container.component.html',
  styleUrls: ['./nyx-container.component.scss']
})
export class NyxContainerComponent extends BaseLayout implements OnInit {
  readonly baseClass = "container";
  constructor() { super(); }

  ngOnInit() {
  }

}
