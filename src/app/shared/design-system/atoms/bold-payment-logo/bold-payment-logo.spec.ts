import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoldPaymentLogo } from './bold-payment-logo';
import { provideZonelessChangeDetection } from '@angular/core';

describe('BoldPaymentLogo', () => {
  let component: BoldPaymentLogo;
  let fixture: ComponentFixture<BoldPaymentLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoldPaymentLogo],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(BoldPaymentLogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
