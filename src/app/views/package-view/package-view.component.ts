import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Package } from 'src/app/models';
import { PackageService } from 'src/app/services';

@Component({
  selector: 'app-package-view',
  templateUrl: './package-view.component.html',
  styleUrls: ['./package-view.component.scss'],
})
export class PackageViewComponent {
  _package: Package | null = null;

  constructor(
    private packageService: PackageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const packageId = params['packageId'] as string;
      if (packageId) {
        this.packageService.getPackageById(packageId).subscribe((result) => {
          this._package = result;
        });
      }
    });
  }
}
