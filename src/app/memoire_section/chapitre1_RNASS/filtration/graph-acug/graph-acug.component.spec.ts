import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphACTGComponent } from './graph-actg.component';

describe('GraphACTGComponent', () => {
  let component: GraphACTGComponent;
  let fixture: ComponentFixture<GraphACTGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphACTGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphACTGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
