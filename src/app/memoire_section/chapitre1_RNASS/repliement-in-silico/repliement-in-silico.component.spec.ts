import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepliementInSilicoComponent } from './repliement-in-silico.component';

describe('RepliementInSilicoComponent', () => {
  let component: RepliementInSilicoComponent;
  let fixture: ComponentFixture<RepliementInSilicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepliementInSilicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepliementInSilicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
