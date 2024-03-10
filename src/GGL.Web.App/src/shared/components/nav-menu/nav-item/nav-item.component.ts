import { NgClass, NgFor, NgIf } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Menu } from '../../../models';
import { NavSubMenuComponent } from '../nav-sub-menu/nav-sub-menu.component';
import { IconComponent } from '../../icon/icon.component';
import { IconTypes } from '../../../enums/icon-type.enum';
import { IconSize } from '../../../enums';

@Component({
    selector: 'ggl-nav-item',
    standalone: true,
    imports: [
        NgClass,
        NgIf,
        NgFor,

        IconComponent,
        NavSubMenuComponent,
        MatIconModule,
        MatTooltipModule
    ],
    templateUrl: './nav-item.component.html',
    styleUrls: ['./nav-item.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavItemComponent {
    @Input('item') menuItem?: Menu;
    @Input('expanded') isMenuExpanded: boolean = false;
    @Output('menuClick') menuClick: EventEmitter<Menu> = new EventEmitter();

    rightIcon: string = IconTypes.CHEVRON_RIGHT;
    rightIconSize: IconSize = IconSize.LARGE;

    constructor(private router: Router) {
    }

    handleClick() {
        if (this.menuItem?.url) {
            this.router.navigate([this.menuItem?.url]);
            return;
        }

        if (this.menuClick) {
            this.menuClick.emit(this.menuItem);
        }
    }
}
