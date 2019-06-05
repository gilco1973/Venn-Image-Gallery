import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagesNameFilter'
})
export class ImagesNameFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
