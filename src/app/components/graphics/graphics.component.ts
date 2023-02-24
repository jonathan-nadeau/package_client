import { Component, ViewChild, DoCheck } from '@angular/core';
import { ChartData, ChartType, ChartConfiguration } from 'chart.js';
import { Package } from 'src/app/models';
import { PackageService } from 'src/app/services';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss'],
})
export class GraphicsComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  _packages: Package[] = [];

  public data: ChartData<'pie', number[]> = {
    labels: [
      '1 étoile',
      '2 étoile',
      '3 étoile',
      '4 étoile',
      '5 étoile',
      '6 étoile',
      '7 étoile',
      '8 étoile',
      '9 étoile',
      '10 étoile',
    ],
    datasets: [],
  };

  public chartType: ChartType = 'doughnut';

  constructor(private packageService: PackageService) {}

  ngOnInit() {
    this.getPackages();
  }

  getPackages() {
    this.packageService.getPackages().subscribe((result) => {
      this._packages = result;
      this.data.datasets = [
        {
          data: this._packages
            .map((_package) =>
              _package.reviews.map((review) => review.scoreOutOfTen)
            )
            .flat(),
        },
      ];
    });
  }
}
