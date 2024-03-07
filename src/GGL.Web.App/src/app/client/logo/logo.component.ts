import { Component, Input, OnInit } from '@angular/core';
import { COLOR_LOGO_SVG, DARK_LOGO_SVG, LOGO_SVG } from '../../../constants/app.constants';

@Component({
  selector: 'ggl-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent implements OnInit {
    @Input() isAdminView: boolean = false;

    logoSvg: string = '';
    ngOnInit(): void {
        this.logoSvg = this.isAdminView ? COLOR_LOGO_SVG : LOGO_SVG;
    }
}
