import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyxColumnsComponent } from './nyx-columns.component';

describe('NyxColumnsComponent', () => {
  let component: NyxColumnsComponent;
  let fixture: ComponentFixture<NyxColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyxColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyxColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
