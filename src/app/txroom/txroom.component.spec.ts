import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxroomComponent } from './txroom.component';

describe('TxroomComponent', () => {
  let component: TxroomComponent;
  let fixture: ComponentFixture<TxroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
