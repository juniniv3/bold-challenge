import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsDashboard } from './transactions-dashboard';
import { LOCALE_ID, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TransactionsApi } from './services/transactions-api';
import { provideHttpClient } from '@angular/common/http';
import { DatePipe, registerLocaleData } from '@angular/common';
import { of } from 'rxjs';
import { Transaction } from './models/transaction.model';

describe('TransactionsDashboard', () => {
  let component: TransactionsDashboard;
  let fixture: ComponentFixture<TransactionsDashboard>;

  beforeEach(async () => {
    registerLocaleData({ provide: LOCALE_ID, useValue: 'es-CO' });

    await TestBed.configureTestingModule({
      imports: [TransactionsDashboard, ],
      providers: [provideZonelessChangeDetection(), provideHttpClientTesting(), provideHttpClient(), {TransactionsApi: {}}],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
  component.transactions$ = of([])
  fixture.detectChanges()
    expect(component).toBeTruthy();
  });
});
