import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NCMComponent } from './ncm.component';

describe('NCMComponent', () => {
  let component: NCMComponent;
  let fixture: ComponentFixture<NCMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NCMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
