import { NgClass, NgIf } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType } from './button.model';
import { IconComponent } from '../icon/icon.component';
import { IconSize } from '../../enums';

@Component({
    selector: 'ggl-button',
    standalone: true,
    imports: [
        NgIf,
        NgClass,
        
        IconComponent
    ],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonComponent {
    @Input() label: string = '';
    @Input() title: string = '';
    @Input() type: string = ButtonType.DEFAULT; 
    @Input('icon') buttonIcon: string = '';
    @Input('iconSize') buttonIconSize: IconSize = IconSize.XXSMALL;
    @Input('showIcon') showIcon: boolean = false;
    @Input('disabled') isDisabled: boolean = false;
    @Input('showLabel') showIconLabel: boolean = true;
    @Input() cssStyle: string = '';
    @Output('clicked') click: EventEmitter<any> = new EventEmitter();

    handleClick() {
        if (this.isDisabled) {
            return;
        }

        this.click.emit(this);
    }
}
