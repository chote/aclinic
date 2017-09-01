import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutabComponent } from './menutab.component';

describe('MenutabComponent', () => {
  let component: MenutabComponent;
  let fixture: ComponentFixture<MenutabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenutabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenutabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
