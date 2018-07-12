import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbresDecisionsComponent } from './arbres-decisions.component';

describe('ArbresDecisionsComponent', () => {
  let component: ArbresDecisionsComponent;
  let fixture: ComponentFixture<ArbresDecisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbresDecisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbresDecisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
