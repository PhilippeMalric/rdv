import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePresentationComponent } from './page-presentation.component';

describe('PagePresentationComponent', () => {
  let component: PagePresentationComponent;
  let fixture: ComponentFixture<PagePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
