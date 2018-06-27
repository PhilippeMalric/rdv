import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetriquesComponent } from './metriques.component';

describe('MetriquesComponent', () => {
  let component: MetriquesComponent;
  let fixture: ComponentFixture<MetriquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetriquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetriquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
