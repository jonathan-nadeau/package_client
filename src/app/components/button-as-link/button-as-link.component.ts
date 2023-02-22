import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-as-link',
  templateUrl: './button-as-link.component.html',
  styleUrls: ['./button-as-link.component.scss'],
})
export class ButtonAsLinkComponent {
  @Input() link: [string, string] | null = null;
  @Input() label: string = '';
}
