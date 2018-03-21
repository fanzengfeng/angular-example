import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'storten'
})
// 截取字符串
export class StortenPipe implements PipeTransform {

  transform(value: any, limit?: number): any {
    if(value.length > limit){
      return value.substr(0,limit)+'...';
    }
    return value;
  }

}
