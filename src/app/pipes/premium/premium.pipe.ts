import { Pipe, PipeTransform } from '@angular/core';
import { Package } from 'src/app/models';

@Pipe({
  name: 'premium',
})
export class PremiumPipe implements PipeTransform {
  transform(_packages: Package[]): Package[] {
    if (_packages.length === 0) return [];

    return _packages.filter((_package) => _package.premium);
  }
}
