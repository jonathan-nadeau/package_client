import { Component, Input } from '@angular/core';
import { Package } from 'src/app/models';
import { UtilsService } from 'src/app/services';

@Component({
  selector: 'app-average-score',
  templateUrl: './average-score.component.html',
  styleUrls: ['./average-score.component.scss'],
})
export class AverageScoreComponent {
  @Input() reviews: Package['reviews'] = [];

  constructor(public utilsService: UtilsService) {}
}
