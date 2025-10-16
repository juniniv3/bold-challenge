import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number | string | null | undefined, currencySymbol: string = '$'): string {
    if (value == null || value === '') return '';

    const num = typeof value === 'string' ? Number(value.replace(/[^0-9.-]+/g, '')) : value;
    if (isNaN(num)) return '';

    const absNum = Math.abs(num);
    const integerPart = Math.trunc(absNum).toString();
    const decimalPartRaw = (absNum % 1).toFixed(3).slice(2); // siempre 3 dígitos si hay fracción

    const groups: string[] = [];
    for (let i = integerPart.length; i > 0; i -= 3) {
      const start = Math.max(0, i - 3);
      groups.unshift(integerPart.slice(start, i));
    }

    let joined = groups.join('.'); // ej: "91.233.950" o "1.000"
    if (groups.length >= 3) {
      const firstDotIndex = joined.indexOf('.');
      if (firstDotIndex !== -1) {
        joined = joined.slice(0, firstDotIndex) + '’' + joined.slice(firstDotIndex + 1);
      }
    }

    const hasFraction = (absNum % 1) !== 0;
    const decimals = hasFraction ? `.${decimalPartRaw}` : '';

    const sign = num < 0 ? '-' : '';

    return `${sign}${currencySymbol} ${joined}${decimals}`;
  }
}
