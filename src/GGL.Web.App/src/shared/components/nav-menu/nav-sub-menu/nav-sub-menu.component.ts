import { Component, OnInit, Input, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Menu } from '../../../models';
import { NgFor } from '@angular/common';

@Component({
	selector: 'ggl-nav-sub-menu',
    standalone: true,
	templateUrl: './nav-sub-menu.component.html',
	styleUrls: ['./nav-sub-menu.component.scss'],
    imports: [
        NgFor
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavSubMenuComponent implements OnInit {
	@Input() public menuItems: Array<Menu> = [];
	constructor() { }

	public ngOnInit(): void {
	}

}
