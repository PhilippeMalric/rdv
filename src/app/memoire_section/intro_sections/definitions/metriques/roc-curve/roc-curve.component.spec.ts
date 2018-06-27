import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocCurveComponent } from './roc-curve.component';

describe('RocCurveComponent', () => {
  let component: RocCurveComponent;
  let fixture: ComponentFixture<RocCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
