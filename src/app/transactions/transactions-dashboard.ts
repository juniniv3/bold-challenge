import { Component, inject } from '@angular/core';
import { TransactionsApi } from './services/transactions-api';
import { CommonModule, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoneyValue } from '../shared/design-system/atoms/money-value/money-value';
import { AmountCard } from '../shared/design-system/molecules/amount-card/amount-card';
import { BoldButton } from '../shared/design-system/atoms/bold-button/bold-button';
import { BoldSegmentedTabs } from '../shared/design-system/molecules/bold-segmented-tabs/bold-segmented-tabs';
import { BoldFilterBox } from "../shared/design-system/molecules/bold-filter-box/bold-filter-box";

@Component({
  selector: 'app-transactions',
  imports: [
    CommonModule,
    FormsModule,
    AsyncPipe,
    MoneyValue,
    AmountCard,
    AmountCard,
    BoldButton,
    BoldSegmentedTabs,
    BoldFilterBox
],
  templateUrl: './transactions-dashboard.html',
  styleUrl: './transactions-dashboard.scss',
})
export class TransactionsDashboard {
  transactionsApi = inject(TransactionsApi);
  transactions$ = this.transactionsApi.getTransactions();
  filterText = '';
  tabs = [
    { label: 'Hoy', value: 'today' },
    { label: 'Esta semana', value: 'this week' },
    { label: 'Junio', value: 'june' },
  ];
  filters = [
    { label: 'Todas', id: 'all', checked: true },
    { label: 'Enviadas', id: 'sent', checked: false },
    { label: 'Recibidas', id: 'received', checked: false },
  ]
}
