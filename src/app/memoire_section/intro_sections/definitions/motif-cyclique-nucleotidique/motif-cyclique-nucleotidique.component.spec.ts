import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotifCycliqueNucleotidiqueComponent } from './motif-cyclique-nucleotidique.component';

describe('MotifCycliqueNucleotidiqueComponent', () => {
  let component: MotifCycliqueNucleotidiqueComponent;
  let fixture: ComponentFixture<MotifCycliqueNucleotidiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotifCycliqueNucleotidiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotifCycliqueNucleotidiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
