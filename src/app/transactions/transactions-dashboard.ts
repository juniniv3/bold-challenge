import { Component, inject, LOCALE_ID, signal, effect, OnInit } from '@angular/core';
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
import { Tab } from '../shared/design-system/molecules/bold-segmented-tabs/bold-segmented-tabs.model';
import { Filter } from '../shared/design-system/molecules/bold-filter-box/bold-filter-box.model';

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
export class TransactionsDashboard implements OnInit {
  transactionsApi = inject(TransactionsApi);
  datePipe = inject(DatePipe);
  transactions$ = this.transactionsApi.getTransactions();

  date: Date = new Date();
  formatedDate = new Intl.DateTimeFormat('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(this.date);

  globalFilter =  signal({
  tabs: [ 
      { label: 'hoy', id: 'today', selected: true, description: this.formatedDate },
      { label: 'esta semana', id: 'week', selected: false , description: 'esta semana'},
      { label: this.datePipe.transform(this.date, 'MMMM')!, id: 'month', selected: false , description: this.datePipe.transform(this.date, 'MMMM yyyy')! },
    ],
    filters: [
      { label: 'Cobro con datáfono', id: 'TERMINAL', checked: true },
      { label: 'Cobro con link de pago', id: 'PAYMENT_LINK', checked: false },
      { label: 'Ver todos', id: 'all', checked: false },
    ],
    filterText: '',
  });

  constructor() {
    effect(() => {
      localStorage.setItem('globalFilter', JSON.stringify(this.globalFilter()));
    });
  }

  ngOnInit(): void {
    const storedFilter = localStorage.getItem('globalFilter');
    if (storedFilter) {
      this.globalFilter.set(JSON.parse(storedFilter));
    }
  }

  onTabSelected(tabs: Tab[] ) {
    this.globalFilter.update((current) => ({
      ...current,
      tabs: tabs,
    }));
  }

  onFilterChange(filters: Filter[]) {
    this.globalFilter.update((current) => ({
      ...current,
      filters: filters,
    }));
  }
  
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

  filterTransactions(transactions: Transaction[] | null): Transaction[] | null {
    if (!transactions) return null;

    let filteredTransactions = transactions;
    if (this.globalFilter().filters.some(f => f.checked && f.id !== 'all')) {
      filteredTransactions = filteredTransactions.filter((item) =>
        this.globalFilter().filters.some(f => f.checked && f.id === item.salesType)
      );
    }
    let selectedTab = this.globalFilter().tabs.find(t => t.selected);
    if (selectedTab?.id == 'today') {
      filteredTransactions = filteredTransactions.filter(item =>
        item.createdAt >= new Date().setHours(0, 0, 0, 0) &&
        item.createdAt < new Date().setHours(23, 59, 59, 999)
      );
    }
    if (selectedTab?.id == 'week') {
      const startOfWeek = new Date();
      startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
      startOfWeek.setHours(0, 0, 0, 0);
      const endOfWeek = new Date();
      endOfWeek.setDate(endOfWeek.getDate() + (6 - endOfWeek.getDay()));
      endOfWeek.setHours(23, 59, 59, 999);

      filteredTransactions = filteredTransactions.filter(item =>
        item.createdAt >= startOfWeek.getTime() &&
        item.createdAt <= endOfWeek.getTime()
      );
    }
    if (selectedTab?.id == 'month') {
      const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
      const endOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0, 23, 59, 59, 999);

      filteredTransactions = filteredTransactions.filter(item =>
        item.createdAt >= startOfMonth.getTime() &&
        item.createdAt <= endOfMonth.getTime()
      );
    }
    return filteredTransactions;
  }

  filterTransactionsSearch(transactions: Transaction[] | null): Transaction[] | null {
    if (!transactions) return null;
    const searchText = this.globalFilter().filterText.toLowerCase();
    console.log('Search Text:', searchText);
    if (!searchText) return transactions;

    return transactions.filter(item =>
      item.id.toLowerCase().includes(searchText) ||
      item.paymentMethod.toLowerCase().includes(searchText) ||
      item.status.toLowerCase().includes(searchText) ||
      item.franchise?.toLowerCase().includes(searchText) ||
      item.transactionReference.toString().includes(searchText) ||
      item.amount.toString().includes(searchText) ||
      (item.deduction?.toString().includes(searchText) || false)
    ) || null;
  }
}
