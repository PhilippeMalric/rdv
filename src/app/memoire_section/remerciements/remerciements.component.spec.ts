import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemerciementsComponent } from './remerciements.component';

describe('RemerciementsComponent', () => {
  let component: RemerciementsComponent;
  let fixture: ComponentFixture<RemerciementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemerciementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemerciementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
