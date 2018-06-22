import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureSecondaireComponent } from './structure-secondaire.component';

describe('StructureSecondaireComponent', () => {
  let component: StructureSecondaireComponent;
  let fixture: ComponentFixture<StructureSecondaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureSecondaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureSecondaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
