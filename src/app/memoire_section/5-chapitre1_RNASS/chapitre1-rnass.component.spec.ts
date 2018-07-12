import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapitre1RNASSComponent } from './chapitre1-rnass.component';

describe('Chapitre1RNASSComponent', () => {
  let component: Chapitre1RNASSComponent;
  let fixture: ComponentFixture<Chapitre1RNASSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapitre1RNASSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapitre1RNASSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
