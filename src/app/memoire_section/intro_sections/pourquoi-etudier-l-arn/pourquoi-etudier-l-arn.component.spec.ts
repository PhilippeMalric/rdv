import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PourquoiEtudierLARNComponent } from './pourquoi-etudier-l-arn.component';

describe('PourquoiEtudierLARNComponent', () => {
  let component: PourquoiEtudierLARNComponent;
  let fixture: ComponentFixture<PourquoiEtudierLARNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PourquoiEtudierLARNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PourquoiEtudierLARNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
