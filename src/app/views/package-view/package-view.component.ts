import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Establishment, Package } from 'src/app/models';
import { EstablishmentService, PackageService } from 'src/app/services';

@Component({
  selector: 'app-package-view',
  templateUrl: './package-view.component.html',
  styleUrls: ['./package-view.component.scss'],
})
export class PackageViewComponent {
  _package: Package | null = null;
  _establishment: Establishment | null = null;

  constructor(
    private packageService: PackageService,
    private establishmentService: EstablishmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const packageId = params['packageId'] as string;
      if (packageId) {
        this.getPackageById(packageId);
      }
    });
  }

  getPackageById(id: string) {
    this.packageService.getPackageById(id).subscribe((result) => {
      this._package = result;
      console.log(result);
      this.getEstablishmentById(result.establishment_id);
    });
  }

  getEstablishmentById(id: string) {
    this.establishmentService.getEstablishmentsById(id).subscribe((result) => {
      this._establishment = result;
    });
  }
}
