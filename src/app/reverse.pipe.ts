import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value:string) {
    var splitString = value.split("");
    var reverseArray = splitString.reverse();

    return reverseArray.join("");
  }
}
