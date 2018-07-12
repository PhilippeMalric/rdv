import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionDeLaStructureComponent } from './prediction-de-la-structure.component';

describe('PredictionDeLaStructureComponent', () => {
  let component: PredictionDeLaStructureComponent;
  let fixture: ComponentFixture<PredictionDeLaStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionDeLaStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionDeLaStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
