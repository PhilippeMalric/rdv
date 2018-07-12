import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigleEtAbreviationComponent } from './sigle-et-abreviation.component';

describe('SigleEtAbreviationComponent', () => {
  let component: SigleEtAbreviationComponent;
  let fixture: ComponentFixture<SigleEtAbreviationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigleEtAbreviationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigleEtAbreviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
