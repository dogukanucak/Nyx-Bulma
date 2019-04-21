import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyxBoxComponent } from './nyx-box.component';

describe('NyxBoxComponent', () => {
  let component: NyxBoxComponent;
  let fixture: ComponentFixture<NyxBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyxBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyxBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
