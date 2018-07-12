import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreqPaireeComponent } from './freq-pairee.component';

describe('FreqPaireeComponent', () => {
  let component: FreqPaireeComponent;
  let fixture: ComponentFixture<FreqPaireeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreqPaireeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreqPaireeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
