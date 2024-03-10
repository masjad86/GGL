import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ggl-label',
    standalone: true,
    imports: [
        NgIf,
        NgClass
    ],
    templateUrl: './label.component.html',
    styleUrl: './label.component.scss'
})
export class LabelComponent {
    @Input() text: string = '';
    @Input() clickable: boolean = false;
    @Input('disabled') isDisabled: boolean = false;
    @Output('clicked') labelClick: EventEmitter<string> = new EventEmitter();

    handleClick() {
        if (this.clickable && !this.isDisabled) {
            this.labelClick.emit(this.text);
        }
    }
}
