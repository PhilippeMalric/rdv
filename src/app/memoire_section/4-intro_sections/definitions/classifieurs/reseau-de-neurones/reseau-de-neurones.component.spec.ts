import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseauDeNeuronesComponent } from './reseau-de-neurones.component';

describe('ReseauDeNeuronesComponent', () => {
  let component: ReseauDeNeuronesComponent;
  let fixture: ComponentFixture<ReseauDeNeuronesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseauDeNeuronesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseauDeNeuronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
