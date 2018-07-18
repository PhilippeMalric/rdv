import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nvd3ScatterComponent } from './nvd3-scatter.component';

describe('Nvd3ScatterComponent', () => {
  let component: Nvd3ScatterComponent;
  let fixture: ComponentFixture<Nvd3ScatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nvd3ScatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nvd3ScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
