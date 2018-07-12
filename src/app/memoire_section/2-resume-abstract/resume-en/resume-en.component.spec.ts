import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeEnComponent } from './resume-en.component';

describe('ResumeEnComponent', () => {
  let component: ResumeEnComponent;
  let fixture: ComponentFixture<ResumeEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
