import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyxLevelLeftComponent } from './nyx-level-left.component';

describe('NyxLevelLeftComponent', () => {
  let component: NyxLevelLeftComponent;
  let fixture: ComponentFixture<NyxLevelLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyxLevelLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyxLevelLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
