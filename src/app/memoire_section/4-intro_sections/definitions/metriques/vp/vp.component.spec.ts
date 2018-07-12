import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpComponent } from './vp.component';

describe('VpComponent', () => {
  let component: VpComponent;
  let fixture: ComponentFixture<VpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
