import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ncm2Component } from './ncm2.component';

describe('Ncm2Component', () => {
  let component: Ncm2Component;
  let fixture: ComponentFixture<Ncm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ncm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ncm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
