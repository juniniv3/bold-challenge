import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CustomCurrencyPipe } from '../../../pipes/custom-currency-pipe';
import { NgClass } from '@angular/common';

@Component({
  selector: 'bold-money-value',
  imports: [CustomCurrencyPipe, NgClass],
  templateUrl: './money-value.html',
  styleUrl: './money-value.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoneyValue {
  @Input() amount: number = 0;
  @Input() color: 'natural' | 'negative' | 'gradient' = 'natural';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get sizeClass() {
    switch (this.size) {
      case 'sm': return 'money-value--sm';
      case 'md': return 'money-value--md';
      case 'lg': return 'money-value--lg';
      default: return 'money-value--md';
    }
  }

  get colorClass() {
    switch (this.color) {
      case 'natural': return 'money-value--natural';
      case 'negative': return 'money-value--negative';
      case 'gradient': return 'money-value--gradient bold-base-gradient-text';
      default: return 'money-value--natural';
    }
  }
}
