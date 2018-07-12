import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLabComponent } from './one-lab.component';

describe('OneLabComponent', () => {
  let component: OneLabComponent;
  let fixture: ComponentFixture<OneLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
