import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyxLevelItemComponent } from './nyx-level-item.component';

describe('NyxLevelItemComponent', () => {
  let component: NyxLevelItemComponent;
  let fixture: ComponentFixture<NyxLevelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyxLevelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyxLevelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
