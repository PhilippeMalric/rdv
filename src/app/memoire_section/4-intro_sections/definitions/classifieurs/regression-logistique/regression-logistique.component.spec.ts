import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegressionLogistiqueComponent } from './regression-logistique.component';

describe('RegressionLogistiqueComponent', () => {
  let component: RegressionLogistiqueComponent;
  let fixture: ComponentFixture<RegressionLogistiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegressionLogistiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegressionLogistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
