import { Component, inject, LOCALE_ID, signal } from '@angular/core';
import { TransactionsApi } from './services/transactions-api';
import { CommonModule, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoneyValue } from '../shared/design-system/atoms/money-value/money-value';
import { AmountCard } from '../shared/design-system/molecules/amount-card/amount-card';
import { BoldSegmentedTabs } from '../shared/design-system/molecules/bold-segmented-tabs/bold-segmented-tabs';
import { BoldFilterBox } from '../shared/design-system/molecules/bold-filter-box/bold-filter-box';
import { BoldPaymentLogo } from '../shared/design-system/atoms/bold-payment-logo/bold-payment-logo';
import { BoldIcon } from '../shared/design-system/atoms/bold-icon/bold-icon';
import { Transaction } from './models/transaction.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transactions',
  imports: [
    CommonModule,
    FormsModule,
    AsyncPipe,
    MoneyValue,
    AmountCard,
    AmountCard,
    BoldSegmentedTabs,
    BoldFilterBox,
    BoldPaymentLogo,
    BoldIcon,
  ],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'es-CO' }],
  templateUrl: './transactions-dashboard.html',
  styleUrl: './transactions-dashboard.scss',
})
export class TransactionsDashboard {
  transactionsApi = inject(TransactionsApi);
  datePipe = inject(DatePipe);
  transactions$ = this.transactionsApi.getTransactions();

  date: Date = new Date();
  formatedDate = new Intl.DateTimeFormat('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(this.date);

  globalFilter = signal({
    tabs: [ 
      { label: 'hoy', id: 'today', selected: true, description: this.formatedDate },
      { label: 'esta semana', id: 'week', selected: false , description: 'esta semana'},
      { label: this.datePipe.transform(this.date, 'MMMM')!, id: 'month', selected: false , description: this.datePipe.transform(this.date, 'MMMM yyyy')! },
    ],
    filters: [
      { label: 'Cobro con datáfono', id: 'datafono', checked: true },
      { label: 'Cobro con link de pago', id: 'link', checked: false },
      { label: 'Ver todos', id: 'all', checked: false },
    ],
    filterText: '',
  });

  filterText = '';

  totalAmount(transactions: Transaction[] | null): number {
    if (!transactions) return 0;
    let total = 0;
    transactions.forEach((item) => (total += item.amount));
    return total;
  }

  get selectedPeriodTab() {
    return this.globalFilter().tabs.find((tab) => tab.selected)?.label || '';
  }

  get selectedPeriodTabDescription() {
    return this.globalFilter().tabs.find((tab) => tab.selected)?.description || '';
  }

  salesIcon(salesType: string): string {
    return salesType === 'TERMINAL' ? 'mobile' : 'link';
  }
}
