import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeLocalComponent } from './gauge-local.component';

describe('GaugeLocalComponent', () => {
  let component: GaugeLocalComponent;
  let fixture: ComponentFixture<GaugeLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugeLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
