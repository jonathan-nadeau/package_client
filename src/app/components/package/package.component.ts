import { Component, Input } from '@angular/core';
import { Establishment, Package } from 'src/app/models';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss'],
})
export class PackageComponent {
  @Input() _package: Package | null = null;
  @Input() _establishment: Establishment | null = null;
}
