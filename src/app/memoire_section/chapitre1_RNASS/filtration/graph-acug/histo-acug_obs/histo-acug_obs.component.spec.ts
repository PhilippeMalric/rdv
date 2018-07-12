import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoACTGComponent } from './histo-actg.component';

describe('HistoACTGComponent', () => {
  let component: HistoACTGComponent;
  let fixture: ComponentFixture<HistoACTGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoACTGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoACTGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
