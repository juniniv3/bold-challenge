import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CustomCurrencyPipe } from '../../../pipes/custom-currency-pipe';
import { MoneyValue } from '../../atoms/money-value/money-value';

@Component({
  selector: 'bold-amount-card',
  imports: [CustomCurrencyPipe, MoneyValue],
  templateUrl: './amount-card.html',
  styleUrl: './amount-card.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmountCard {
  @Input() title: string = '';
  @Input() amount: number = 0;
  @Input() description: string = '';
}
