import { Component, Input } from '@angular/core';

@Component({
  selector: 'ggl-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
    @Input() name?: string;
    @Input() avatar?: string;
    @Input() title?: string;
}
