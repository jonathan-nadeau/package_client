import { Component, Input } from '@angular/core';
import { UtilsService } from 'src/app/services';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.scss'],
})
export class PriceDisplayComponent {
  @Input() price: number = 0;
  @Input() discount: number = 0;

  constructor(public utils: UtilsService) {}
}
