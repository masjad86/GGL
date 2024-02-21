import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Menu } from '../../models';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
	selector: 'ggl-nav-menu',
    standalone: true,
	templateUrl: './nav-menu.component.html',
	styleUrls: ['./nav-menu.component.css'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        NgClass,
        NgIf,
        NgFor,
    ],
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
