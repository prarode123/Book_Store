import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaycheckComponent } from './paycheck.component';

describe('PaycheckComponent', () => {
  let component: PaycheckComponent;
  let fixture: ComponentFixture<PaycheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaycheckComponent]
    });
    fixture = TestBed.createComponent(PaycheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
