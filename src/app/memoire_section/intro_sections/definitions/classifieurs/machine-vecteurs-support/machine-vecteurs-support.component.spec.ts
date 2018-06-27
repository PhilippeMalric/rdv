import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineVecteursSupportComponent } from './machine-vecteurs-support.component';

describe('MachineVecteursSupportComponent', () => {
  let component: MachineVecteursSupportComponent;
  let fixture: ComponentFixture<MachineVecteursSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineVecteursSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineVecteursSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
