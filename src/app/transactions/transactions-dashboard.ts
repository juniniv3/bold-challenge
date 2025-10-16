import { Component, inject } from '@angular/core';
import { TransactionsApi } from './services/transactions-api';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-transactions',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './transactions-dashboard.html',
  styleUrl: './transactions-dashboard.scss'
})
export class TransactionsDashboard {
  transactionsApi = inject(TransactionsApi);
  transactions$ = this.transactionsApi.getTransactions();
}
