
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySideNavComponent } from './my-side-nav.component';

describe('MySideNavComponent', () => {
  let component: MySideNavComponent;
  let fixture: ComponentFixture<MySideNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MySideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
