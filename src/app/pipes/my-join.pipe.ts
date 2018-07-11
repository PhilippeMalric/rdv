import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myJoin'
})
export class MyJoinPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == null) //since the async is still working
      return "";
    return value.join();
  }

}
