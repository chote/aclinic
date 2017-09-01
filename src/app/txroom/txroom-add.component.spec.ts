import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxroomAddComponent } from './txroom-add.component';

describe('TxroomAddComponent', () => {
  let component: TxroomAddComponent;
  let fixture: ComponentFixture<TxroomAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxroomAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxroomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
