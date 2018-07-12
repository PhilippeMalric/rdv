import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EternaComponent } from './eterna.component';

describe('EternaComponent', () => {
  let component: EternaComponent;
  let fixture: ComponentFixture<EternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
