import { Component, OnInit, Input, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Menu } from '../../../models';
import { NgClass, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IconComponent } from '../../icon/icon.component';

@Component({
	selector: 'ggl-nav-sub-menu',
    standalone: true,
	templateUrl: './nav-sub-menu.component.html',
	styleUrls: ['./nav-sub-menu.component.scss'],
    imports: [
        NgIf,
        NgClass,

        IconComponent,
        MatIconModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavSubMenuComponent implements OnInit {
	@Input('item') subMenuItem?: Menu;
    @Input('expanded') isMenuExpanded: boolean = false;
	constructor() { }

	public ngOnInit(): void {
	}

}
