import { Component } from '@angular/core';
import { Package } from './models';
import { PackageService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  _packages: Package[] = [];

  constructor(private packageService: PackageService) {}

  getPackages(): void {
    this.packageService
      .getPackages()
      .subscribe((result) => (this._packages = result));
  }
}
