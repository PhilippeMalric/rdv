import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoMcnComponent } from './algo-mcn.component';

describe('AlgoMcnComponent', () => {
  let component: AlgoMcnComponent;
  let fixture: ComponentFixture<AlgoMcnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoMcnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoMcnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
