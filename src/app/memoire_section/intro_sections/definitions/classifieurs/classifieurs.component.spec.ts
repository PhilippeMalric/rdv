import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifieursComponent } from './classifieurs.component';

describe('ClassifieursComponent', () => {
  let component: ClassifieursComponent;
  let fixture: ComponentFixture<ClassifieursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifieursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifieursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
