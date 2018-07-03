import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContexteComponent } from './contexte.component';

describe('ContexteComponent', () => {
  let component: ContexteComponent;
  let fixture: ComponentFixture<ContexteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContexteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContexteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
