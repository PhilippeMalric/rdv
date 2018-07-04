import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongueurSeqComponent } from './longueur-seq.component';

describe('LongueurSeqComponent', () => {
  let component: LongueurSeqComponent;
  let fixture: ComponentFixture<LongueurSeqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongueurSeqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongueurSeqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
