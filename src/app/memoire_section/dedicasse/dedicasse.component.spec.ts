import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicasseComponent } from './dedicasse.component';

describe('DedicasseComponent', () => {
  let component: DedicasseComponent;
  let fixture: ComponentFixture<DedicasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DedicasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DedicasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
