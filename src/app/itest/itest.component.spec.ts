import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItestComponent } from './itest.component';

describe('ItestComponent', () => {
  let component: ItestComponent;
  let fixture: ComponentFixture<ItestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
