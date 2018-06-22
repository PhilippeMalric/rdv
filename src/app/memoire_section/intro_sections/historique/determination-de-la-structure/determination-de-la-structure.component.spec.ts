import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeterminationDeLaStructureComponent } from './determination-de-la-structure.component';

describe('DeterminationDeLaStructureComponent', () => {
  let component: DeterminationDeLaStructureComponent;
  let fixture: ComponentFixture<DeterminationDeLaStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeterminationDeLaStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeterminationDeLaStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
