import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bold-payment-logo',
  imports: [],
  templateUrl: './bold-payment-logo.html',
  styleUrl: './bold-payment-logo.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoldPaymentLogo {
  @Input() brand: 'VISA' | 'PSE' | 'DAVIPLATA' | 'BANCOLOMBIA' | 'NEQUI' | 'MASTERCARD' | string =
    'VISA';
  @Input() size: 'sm' | 'md' | 'lg' = 'sm';

  get logoSrc() {
    switch (this.brand) {
      case 'VISA':
        return '/assets/shared/design-system/visaLogo.png';
      case 'PSE':
        return '/assets/shared/design-system/pseLogo.png';
      case 'DAVIPLATA':
        return '/assets/shared/design-system/daviplataLogo.png';
      case 'BANCOLOMBIA':
        return '/assets/shared/design-system/bancolombiaLogo.png';
      case 'NEQUI':
        return '/assets/shared/design-system/nequiLogo.png';
      case 'MASTERCARD':
        return '/assets/shared/design-system/mastercardLogo.png';
      default:
        return '/assets/shared/design-system/visaLogo.png';
    }
  }
}
