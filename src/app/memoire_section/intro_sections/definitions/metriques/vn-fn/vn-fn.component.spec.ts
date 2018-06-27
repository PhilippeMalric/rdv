import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VnFnComponent } from './vn-fn.component';

describe('VnFnComponent', () => {
  let component: VnFnComponent;
  let fixture: ComponentFixture<VnFnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnFnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnFnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
