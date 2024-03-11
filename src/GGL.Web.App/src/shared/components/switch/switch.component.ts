import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ggl-switch',
    standalone: true,
    imports: [
        NgIf,
        NgClass
    ],
    templateUrl: './switch.component.html',
    styleUrl: './switch.component.scss'
})
export class SwitchComponent {
    @Input('selected') switchSelected: boolean = false;
    @Input('disabled') isDisabled: boolean = false;
    @Output('toggle') switchToggle: EventEmitter<boolean> = new EventEmitter();

    handleToggle() {
        if (this.isDisabled) {
            return;
        }

        this.switchSelected = !this.switchSelected;
        if (this.switchToggle) {
            this.switchToggle.emit(this.switchSelected);
        }
    }
}
