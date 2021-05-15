import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullcheck'
})
export class NullcheckPipe implements PipeTransform {

  transform(value: string | any, inPlace: string = '---'): string {
    if (!value) { return inPlace; }
    return value;
  }

}
