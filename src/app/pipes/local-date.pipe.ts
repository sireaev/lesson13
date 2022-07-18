import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { DateEnum } from '../enums/date.enum';

@Pipe({
  name: 'localDate'
})
export class LocalDatePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(value: string, zero: DateEnum): string | null {
    if (!value || !Date.parse(value)) {
      return value;
    }

    if (zero === DateEnum.ZERO) {
      const parsedValue = value.endsWith('Z') ? value.substring(0, value.length - 1) : value;
      return this.datePipe.transform(parsedValue, 'dd.MM.yyyy HH:mm')
    }

    return (value.endsWith('Z') ?
    this.datePipe.transform(value, 'dd.MM.yyyy HH:mm') :
    this.datePipe.transform(`${value}Z`, 'dd.MM.yyyy HH:mm'));
  }

}
