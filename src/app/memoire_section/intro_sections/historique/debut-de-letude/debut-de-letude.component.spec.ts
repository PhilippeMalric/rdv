import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebutDeLetudeComponent } from './debut-de-letude.component';

describe('DebutDeLetudeComponent', () => {
  let component: DebutDeLetudeComponent;
  let fixture: ComponentFixture<DebutDeLetudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebutDeLetudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebutDeLetudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
