import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MoneyValue } from '../../atoms/money-value/money-value';
import { BoldIcon } from "../../atoms/bold-icon/bold-icon";
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'bold-amount-card',
  imports: [ MoneyValue, BoldIcon, TitleCasePipe],
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
