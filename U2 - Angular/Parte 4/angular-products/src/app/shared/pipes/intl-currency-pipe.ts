import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intlCurrency',
})
export class IntlCurrencyPipe implements PipeTransform {
  transform(price: number, currency: string, locale: string): unknown {
    const formatter = new Intl.NumberFormat(locale, { currency, style: 'currency' });
    return formatter.format(price);
  }
}
