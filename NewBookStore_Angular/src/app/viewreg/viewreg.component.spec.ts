import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewregComponent } from './viewreg.component';

describe('ViewregComponent', () => {
  let component: ViewregComponent;
  let fixture: ComponentFixture<ViewregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewregComponent]
    });
    fixture = TestBed.createComponent(ViewregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
