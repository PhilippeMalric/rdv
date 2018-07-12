import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RMDBComponent } from './rmdb.component';

describe('RMDBComponent', () => {
  let component: RMDBComponent;
  let fixture: ComponentFixture<RMDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RMDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RMDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
