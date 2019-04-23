import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyxColumnComponent } from './nyx-column.component';

describe('ColumnComponent', () => {
  let component: NyxColumnComponent;
  let fixture: ComponentFixture<NyxColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyxColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyxColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
