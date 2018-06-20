import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginingComponent } from './begining.component';

describe('BeginingComponent', () => {
  let component: BeginingComponent;
  let fixture: ComponentFixture<BeginingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeginingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
