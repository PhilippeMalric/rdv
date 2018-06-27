import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionSSComponent } from './prediction-ss.component';

describe('PredictionSSComponent', () => {
  let component: PredictionSSComponent;
  let fixture: ComponentFixture<PredictionSSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionSSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
