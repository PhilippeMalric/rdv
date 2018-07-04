import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilationComponent } from './compilation.component';

describe('CompilationComponent', () => {
  let component: CompilationComponent;
  let fixture: ComponentFixture<CompilationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompilationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
