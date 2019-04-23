import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyxLevelComponent } from './nyx-level.component';

describe('NyxLevelComponent', () => {
  let component: NyxLevelComponent;
  let fixture: ComponentFixture<NyxLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyxLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyxLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
