import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charCount'
})
export class CharCountPipe implements PipeTransform {

  transform(value : string, displayText: string = "cc"): unknown {
    return value + " (" + displayText + ": " + value.length + ")";
  }

}
