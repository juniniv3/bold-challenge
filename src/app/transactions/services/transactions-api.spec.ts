import { TestBed } from '@angular/core/testing';
import { TransactionsApi } from './transactions-api';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';


describe('TransactionsApi', () => {
  let service: TransactionsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection(), provideHttpClient()],
    });
    service = TestBed.inject(TransactionsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
