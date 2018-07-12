import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostedDecisionTreeComponent } from './boosted-decision-tree.component';

describe('BoostedDecisionTreeComponent', () => {
  let component: BoostedDecisionTreeComponent;
  let fixture: ComponentFixture<BoostedDecisionTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoostedDecisionTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostedDecisionTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
