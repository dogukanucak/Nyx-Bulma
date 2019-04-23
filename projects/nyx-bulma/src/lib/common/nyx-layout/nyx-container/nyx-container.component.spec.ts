import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyxContainerComponent } from './nyx-container.component';

describe('NyxContainerComponent', () => {
  let component: NyxContainerComponent;
  let fixture: ComponentFixture<NyxContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyxContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
