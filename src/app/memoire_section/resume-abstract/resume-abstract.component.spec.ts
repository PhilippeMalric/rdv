import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAbstractComponent } from './resume-abstract.component';

describe('ResumeAbstractComponent', () => {
  let component: ResumeAbstractComponent;
  let fixture: ComponentFixture<ResumeAbstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeAbstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
