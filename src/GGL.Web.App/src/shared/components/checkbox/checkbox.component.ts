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
    @Input('checked') isChecked: boolean = false;
    @Input('disabled') isDisabled: boolean = false;
    @Output('changed') valueChanged: EventEmitter<boolean> = new EventEmitter();

    handleClick($event: any) {
        this.isChecked = $event.checked;
        this.valueChanged.emit($event.checked);
    }
}
