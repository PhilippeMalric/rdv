import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelationPearsonComponent } from './correlation-pearson.component';

describe('CorrelationPearsonComponent', () => {
  let component: CorrelationPearsonComponent;
  let fixture: ComponentFixture<CorrelationPearsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrelationPearsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrelationPearsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
