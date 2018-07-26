import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeGlobalComponent } from './gauge-global.component';

describe('GaugeGlobalComponent', () => {
  let component: GaugeGlobalComponent;
  let fixture: ComponentFixture<GaugeGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugeGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
