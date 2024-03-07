import { NgClass, NgFor, NgIf } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';

import { Menu } from '../../../models';

@Component({
    selector: 'ggl-nav-item',
    standalone: true,
    imports: [
        NgClass,
        NgIf,
        NgFor,

        MatIconModule,
        MatTooltipModule
    ],
    templateUrl: './nav-item.component.html',
    styleUrls: ['./nav-item.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavItemComponent {
    @Input('item') menuItem?: Menu;
    @Input() isMenuExpanded: boolean = false;

    handleClick() {
        if (this.menuItem?.click) {
            this.menuItem.click();
        }
    }
}
