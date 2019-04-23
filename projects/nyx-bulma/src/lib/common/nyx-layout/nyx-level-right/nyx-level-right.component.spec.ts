import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyxLevelRightComponent } from './nyx-level-right.component';

describe('NyxLevelRightComponent', () => {
  let component: NyxLevelRightComponent;
  let fixture: ComponentFixture<NyxLevelRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyxLevelRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyxLevelRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
