import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NucleotidesComponent } from './nucleotides.component';

describe('NucleotidesComponent', () => {
  let component: NucleotidesComponent;
  let fixture: ComponentFixture<NucleotidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NucleotidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NucleotidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
