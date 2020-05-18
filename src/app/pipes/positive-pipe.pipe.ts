import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positivePipe'
})
export class PositivePipePipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    if(0>=Number(value)){
      return Number(value)*(-1)
    }
    else{
      return value
    }
  }

}
