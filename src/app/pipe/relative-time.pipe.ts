import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale/es';

@Pipe({
  name: 'relativeTime',
  standalone: true
})
export class RelativeTimePipe implements PipeTransform {

  transform(value: Date): string {
    const distance = formatDistanceToNow(value, {locale: es});

    return `Hace ${distance}`
  }

}
