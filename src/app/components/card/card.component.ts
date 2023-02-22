import { Component, Input } from '@angular/core';
import { Establishment, Package } from 'src/app/models';
import { UtilsService } from 'src/app/services';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() _package: Package | null = null;
  @Input() _establishment: Establishment | null = null;

  constructor(public utilsService: UtilsService) {}
}
