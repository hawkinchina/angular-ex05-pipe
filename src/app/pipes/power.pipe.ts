import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power',
})
export class powerPipe implements PipeTransform {
  transform(value: number, args?: number): any {
    //判断，如果不存在args参数，默认： 2倍计算
    if (!args) {
      args = 2;
    }
    return value * args;
  }
}
