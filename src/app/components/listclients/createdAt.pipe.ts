import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createdAtPipe',
  standalone:true,
})
export class CreatedAtPipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    return `${day}/${month}/${year} ${hour}:${minute}`;
  }
}