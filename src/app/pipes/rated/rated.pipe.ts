import { Pipe, PipeTransform } from '@angular/core';
import { Package } from 'src/app/models';

@Pipe({
  name: 'rated',
})
export class RatedPipe implements PipeTransform {
  transform(_packages: Package[], scoreOutOfTen: number = 1): Package[] {
    if (_packages.length === 0) return [];

    return _packages.filter((_package) => {
      if (_package.reviews.length === 0) return false;
      let scoreTotal = 0;
      _package.reviews.forEach((review) => {
        scoreTotal += review.scoreOutOfTen;
      });

      const scoreAverage = Math.round(scoreTotal / _package.reviews.length);

      return scoreAverage >= scoreOutOfTen;
    });
  }
}
