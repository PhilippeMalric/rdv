import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapheDesTransitionsDesARNComponent } from './graphe-des-transitions-des-arn.component';

describe('GrapheDesTransitionsDesARNComponent', () => {
  let component: GrapheDesTransitionsDesARNComponent;
  let fixture: ComponentFixture<GrapheDesTransitionsDesARNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrapheDesTransitionsDesARNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapheDesTransitionsDesARNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
