import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Menu } from '../../../models';

@Component({
	selector: 'ggl-nav-sub-menu',
	templateUrl: './nav-sub-menu.component.html',
	styleUrls: ['./nav-sub-menu.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavSubMenuComponent implements OnInit {
	@Input() public menuItems: Array<Menu>;
	constructor() { }

	public ngOnInit(): void {
	}

}
