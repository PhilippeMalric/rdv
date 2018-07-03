import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFrComponent } from './resume-fr.component';

describe('ResumeFrComponent', () => {
  let component: ResumeFrComponent;
  let fixture: ComponentFixture<ResumeFrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeFrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
