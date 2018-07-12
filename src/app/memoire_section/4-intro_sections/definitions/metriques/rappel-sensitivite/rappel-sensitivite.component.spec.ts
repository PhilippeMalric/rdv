import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappelSensitiviteComponent } from './rappel-sensitivite.component';

describe('RappelSensitiviteComponent', () => {
  let component: RappelSensitiviteComponent;
  let fixture: ComponentFixture<RappelSensitiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RappelSensitiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappelSensitiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
