import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ggl-checkbox',
    standalone: true,
    imports: [
        NgIf,
        NgClass
    ],
    templateUrl: './checkbox.component.html',
    styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
    @Input() label: string = '';
    @Input('selected') isChecked: boolean = false;
    @Input('disabled') isDisabled: boolean = false;
    @Output('changed') valueChanged: EventEmitter<boolean> = new EventEmitter();

    handleClick() {
        this.isChecked = !this.isChecked;
        this.valueChanged.emit(this.isChecked);
    }
}
