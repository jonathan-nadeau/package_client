import { Component, Input } from '@angular/core';
import { Package } from 'src/app/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() _packages: Package[] = [];
}
