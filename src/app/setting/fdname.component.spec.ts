import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdnameComponent } from './fdname.component';

describe('FdnameComponent', () => {
  let component: FdnameComponent;
  let fixture: ComponentFixture<FdnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
