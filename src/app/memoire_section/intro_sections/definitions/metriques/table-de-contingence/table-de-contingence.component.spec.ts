import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDeContingenceComponent } from './table-de-contingence.component';

describe('TableDeContingenceComponent', () => {
  let component: TableDeContingenceComponent;
  let fixture: ComponentFixture<TableDeContingenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDeContingenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDeContingenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
