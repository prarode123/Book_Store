import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsucclogComponent } from './adsucclog.component';

describe('AdsucclogComponent', () => {
  let component: AdsucclogComponent;
  let fixture: ComponentFixture<AdsucclogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdsucclogComponent]
    });
    fixture = TestBed.createComponent(AdsucclogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
