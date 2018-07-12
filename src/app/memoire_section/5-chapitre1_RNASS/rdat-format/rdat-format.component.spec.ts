import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdatFormatComponent } from './rdat-format.component';

describe('RdatFormatComponent', () => {
  let component: RdatFormatComponent;
  let fixture: ComponentFixture<RdatFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdatFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdatFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
