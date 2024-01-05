import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, Input } from '@angular/core';
import { Menu } from '../../models';

@Component({
	selector: 'ggl-nav-menu',
	templateUrl: './nav-menu.component.html',
	styleUrls: ['./nav-menu.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent implements OnInit, AfterViewInit {
	@Input() public menuItems: Array<Menu> = [];
	constructor() { }

	public ngOnInit(): void {

	}

	public ngAfterViewInit() {
	}
}
