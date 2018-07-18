import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(values: number[]|string[]|object[], key?: string, reverse?: boolean) {
    if (!Array.isArray(values) || values.length <= 0) {
      return null;
    }

    return this.sort(values, key, reverse);
  }

  private sort(value: any[], key?: any, reverse?: boolean): any {

    
    const array: any[] = value.sort((a: any, b: any): number => {
      if (a.hi == 0 && b.hi == 0) {
        return 0;
      }
      else{
        if (a.low > 0) {
          let ratioA = a.hi / a.low;
          if (b.low > 0) {
            let ratioB = b.hi / b.low;
            return (ratioA > ratioB) ? 1 : -1;
          }
            else {
              return -1  ;    
            }
        }
          else {
            return 1   ; 
          }
        }
      })
    }
}
