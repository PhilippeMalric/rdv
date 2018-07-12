import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatFichierComponent } from './format-fichier.component';

describe('FormatFichierComponent', () => {
  let component: FormatFichierComponent;
  let fixture: ComponentFixture<FormatFichierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatFichierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatFichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
