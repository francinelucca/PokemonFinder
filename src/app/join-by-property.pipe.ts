import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinByProperty'
})
export class JoinByPropertyPipe implements PipeTransform {

  transform(value: object[], separator: string,joinProperties: string[]): string {
    return value.map(function(value){
      let val = value;
      let i;
      for(i=0; i< joinProperties.length; i++){
        val = val[joinProperties[i]];
      }
      return val;
    }).join(separator);
  }

}
