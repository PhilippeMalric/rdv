import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationSSComponent } from './visualisation-ss.component';

describe('VisualisationSSComponent', () => {
  let component: VisualisationSSComponent;
  let fixture: ComponentFixture<VisualisationSSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualisationSSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualisationSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
