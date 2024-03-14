import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconSize } from '../../enums';
import { IconTypes } from '../../enums/icon-type.enum';
import { NgClass, NgIf } from '@angular/common';
import { IconPosition } from './icon.model';

@Component({
    selector: 'ggl-icon',
    standalone: true,
    imports: [
        NgIf,
        NgClass,
        MatIconModule
    ],
    templateUrl: './icon.component.html',
    styleUrl: './icon.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IconComponent implements OnInit {
    @Input() title: string = '';
    @Input() disabled: boolean = false;
    @Input() size?: IconSize = IconSize.DEFAULT;
    @Input() icon: string = '';
    @Input() label: string = '';
    @Input() showLabel: boolean = false;
    @Input() cssStyle?: string = '';
    @Input() iconCssStyle: string = '';
    @Input() position: IconPosition = IconPosition.Left;
    @Output('clicked') iconClicked: EventEmitter<any> = new EventEmitter();

    isLeftPosition: boolean = true;
    
    ngOnInit(): void {
        this.isLeftPosition = this.position === IconPosition.Left;
    }
    
    handleClick() {
        if (this.iconClicked && !this.disabled) {
            this.iconClicked.emit();
        }
    }
}
