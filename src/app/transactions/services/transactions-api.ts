import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Transaction } from '../models/transaction.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsApi {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<{ data: Transaction[] }>(`${this.API_URL}`).pipe(map((response) => response?.data || []));
  }
}
