import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortPipe implements PipeTransform {

  transform(VALUES: any): any[]{
      return VALUES.sort((a: any, b: any) => {
      // console.log(a.date);
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }

}
