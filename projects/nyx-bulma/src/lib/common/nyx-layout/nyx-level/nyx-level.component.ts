import { Component, OnInit } from '@angular/core';
import { BaseLayout } from '../nyx-base-layout';

@Component({
  selector: 'nyx-level',
  templateUrl: './nyx-level.component.html',
  styleUrls: ['./nyx-level.component.scss']
})
export class NyxLevelComponent extends BaseLayout implements OnInit {
  readonly baseClass = "level";
  constructor() { super(); }

  ngOnInit() {
  }

}
