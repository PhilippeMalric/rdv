import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapitre2RDVComponent } from './chapitre2-rdv.component';

describe('Chapitre2RDVComponent', () => {
  let component: Chapitre2RDVComponent;
  let fixture: ComponentFixture<Chapitre2RDVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapitre2RDVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapitre2RDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
