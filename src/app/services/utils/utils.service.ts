import { Injectable } from '@angular/core';
import { Package } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  getDiscount(price: number, discount: number): number {
    if (discount === 0) return price;

    return Math.round((price - price * (discount / 100)) * 100) / 100;
  }

  getAverageScore(reviews: Package['reviews']) {
    let scoresTotal: number = 0;

    reviews.forEach((review) => {
      scoresTotal += review.scoreOutOfTen;
    });

    return Math.round(scoresTotal / reviews.length);
  }
}
