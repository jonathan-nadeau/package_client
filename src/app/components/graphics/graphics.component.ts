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
  chartLabels = [
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
  ];

  public pieChart: ChartConfiguration = {
    data: {
      labels: this.chartLabels,
      datasets: [
        {
          label: 'Note des utilisateurs',
          data: this.chartLabels.map((label, index) =>
            this.getAmoutOfReviewByScore(index + 1)
          ),
        },
      ],
    },
    type: 'pie',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        legend: {
          display: true,
        },
        title: {
          text: 'Note donner par les utilisateurs',
        },
      },
    },
  };

  constructor(private packageService: PackageService) {}

  ngOnInit() {
    this.getPackages();
  }

  getPackages() {
    this.packageService.getPackages().subscribe((result) => {
      this._packages = result;
    });
  }

  getAmoutOfReviewByScore(score: number): number {
    let amoutOfScore: number = 0;

    this._packages.forEach((_package) => {
      _package.reviews.forEach((review) => {
        if (review.scoreOutOfTen === score) amoutOfScore++;
      });
    });

    return amoutOfScore;
  }
}
