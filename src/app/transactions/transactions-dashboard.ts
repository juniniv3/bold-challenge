import { Component, inject } from '@angular/core';
import { TransactionsApi } from './services/transactions-api';
import { CommonModule, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoneyValue } from "../shared/design-system/atoms/money-value/money-value";

@Component({
  selector: 'app-transactions',
  imports: [CommonModule, FormsModule, AsyncPipe, MoneyValue],
  templateUrl: './transactions-dashboard.html',
  styleUrl: './transactions-dashboard.scss'
})
export class TransactionsDashboard {
  transactionsApi = inject(TransactionsApi);
  transactions$ = this.transactionsApi.getTransactions();
  filterText = '';
}
