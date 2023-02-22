import { Component } from '@angular/core';
import { Establishment, Package } from 'src/app/models';
import { EstablishmentService, PackageService } from 'src/app/services';

@Component({
  selector: 'app-high-rated-view',
  templateUrl: './high-rated-view.component.html',
  styleUrls: ['./high-rated-view.component.scss'],
})
export class HighRatedViewComponent {
  _packages: Package[] = [];
  _establishments: Establishment[] = [];

  constructor(
    private packageService: PackageService,
    private establishmentService: EstablishmentService
  ) {}

  ngOnInit() {
    this.getPackages();
    this.getEstablishments();
  }

  getPackages() {
    this.packageService.getPackages().subscribe((result) => {
      this._packages = result;
    });
  }

  getEstablishments() {
    this.establishmentService.getEstablishments().subscribe((result) => {
      this._establishments = result;
    });
  }

  getEstablishmentByPackage(_package: Package): Establishment | null {
    const establishments = this._establishments.filter(
      (establishment) => establishment._id === _package.establishment_id
    );

    if (establishments.length === 0) return null;

    return establishments[0];
  }
}
