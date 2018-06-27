import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BayesPointMachineComponent } from './bayes-point-machine.component';

describe('BayesPointMachineComponent', () => {
  let component: BayesPointMachineComponent;
  let fixture: ComponentFixture<BayesPointMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BayesPointMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BayesPointMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
