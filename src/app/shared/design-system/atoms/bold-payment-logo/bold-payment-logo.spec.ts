import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoldPaymentLogo } from './bold-payment-logo';

describe('BoldPaymentLogo', () => {
  let component: BoldPaymentLogo;
  let fixture: ComponentFixture<BoldPaymentLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoldPaymentLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoldPaymentLogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
