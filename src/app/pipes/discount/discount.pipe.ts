import { Pipe, PipeTransform } from '@angular/core';
import { Package } from 'src/app/models';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(_packages: Package[]): Package[] {
    if (_packages.length === 0) return [];

    return _packages.filter((_package) => _package.discount > 0);
  }
}
