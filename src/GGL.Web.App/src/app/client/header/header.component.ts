import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { GGL_MENU_ITEMS, Menu } from '../../../shared';

@Component({
  selector: 'ggl-header',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
    menus: Array<Menu> = GGL_MENU_ITEMS;
    ngOnInit(): void {
        
    }
}
