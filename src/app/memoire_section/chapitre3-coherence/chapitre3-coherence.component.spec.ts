import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapitre3CoherenceComponent } from './chapitre3-coherence.component';

describe('Chapitre3CoherenceComponent', () => {
  let component: Chapitre3CoherenceComponent;
  let fixture: ComponentFixture<Chapitre3CoherenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapitre3CoherenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapitre3CoherenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
