import { NgClass, NgIf } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { IconSize } from '../../enums';

@Component({
    selector: 'ggl-label',
    standalone: true,
    imports: [
        NgIf,
        NgClass,

        IconComponent
    ],
    templateUrl: './label.component.html',
    styleUrl: './label.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LabelComponent {
    @Input() text: string = '';
    @Input() icon: string = '';
    @Input() clickable: boolean = false;
    @Input() showIcon: boolean = false;
    @Input('disabled') isDisabled: boolean = false;
    @Output('clicked') labelClick: EventEmitter<string> = new EventEmitter();

    iconSize: IconSize = IconSize.SMALLER;

    handleClick() {
        if (this.clickable && !this.isDisabled) {
            this.labelClick.emit(this.text);
        }
    }
}
