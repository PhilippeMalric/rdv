import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RMDBExpNameComponent } from './rmdb-exp-name.component';

describe('RMDBExpNameComponent', () => {
  let component: RMDBExpNameComponent;
  let fixture: ComponentFixture<RMDBExpNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RMDBExpNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RMDBExpNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
