import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SondageChimiqueDesARNComponent } from './sondage-chimique-des-arn.component';

describe('SondageChimiqueDesARNComponent', () => {
  let component: SondageChimiqueDesARNComponent;
  let fixture: ComponentFixture<SondageChimiqueDesARNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SondageChimiqueDesARNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SondageChimiqueDesARNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
