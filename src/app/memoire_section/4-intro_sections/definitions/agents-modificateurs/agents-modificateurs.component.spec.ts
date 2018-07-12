import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsModificateursComponent } from './agents-modificateurs.component';

describe('AgentsModificateursComponent', () => {
  let component: AgentsModificateursComponent;
  let fixture: ComponentFixture<AgentsModificateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsModificateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsModificateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
