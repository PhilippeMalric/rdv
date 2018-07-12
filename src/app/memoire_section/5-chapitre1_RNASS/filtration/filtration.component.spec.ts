import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrationComponent } from './filtration.component';

describe('FiltrationComponent', () => {
  let component: FiltrationComponent;
  let fixture: ComponentFixture<FiltrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
