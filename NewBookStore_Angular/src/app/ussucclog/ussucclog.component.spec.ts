import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UssucclogComponent } from './ussucclog.component';

describe('UssucclogComponent', () => {
  let component: UssucclogComponent;
  let fixture: ComponentFixture<UssucclogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UssucclogComponent]
    });
    fixture = TestBed.createComponent(UssucclogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
