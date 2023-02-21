import { Component } from '@angular/core';
import { Package } from 'src/app/models';
import { PackageService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  _packages: Package[] = [];

  constructor(private packageService: PackageService) {}

  ngOnInit() {
    this.getPackages();
  }

  getPackages() {
    this.packageService.getPackages().subscribe((result) => {
      console.log(result);
      this._packages = result;
    });
  }
}
