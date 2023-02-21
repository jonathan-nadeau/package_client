import { Component, Input } from '@angular/core';
import { Establishment, Package } from 'src/app/models';
import { EstablishmentService } from 'src/app/services';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() _package: Package | null = null;
  _establishment: Establishment | null = null;

  constructor(private establishmentService: EstablishmentService) {}

  ngOnInit() {
    this.getEstablishment();
  }

  getEstablishment() {
    if (this._package) {
      this.establishmentService
        .getEstablishmentsById(this._package.establishment_id)
        .subscribe((result) => {
          this._establishment = result;
        });
    }
  }

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
