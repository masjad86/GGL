import { Component, EventEmitter, Input } from '@angular/core';
import { SelectItem } from '../../models';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'ggl-radio',
    standalone: true,
    imports: [
        NgIf,
        NgClass
    ],
    templateUrl: './radio.component.html',
    styleUrl: './radio.component.scss'
})
export class RadioComponent {
    @Input('value') radioValue: any = '';
    @Input('label') radioLabel: string = '';
    @Input('selected') optionSelected: boolean = false; 
    @Input('showLabel') showRadioLabel: boolean = false; 
    @Input('disabled') isDisabled: boolean = false; 
    @Input('changed') optionChange: EventEmitter<SelectItem> = new EventEmitter(); 

    handleChange() {

        if (!this.isDisabled && this.optionChange) {
            const option: SelectItem = {
                text: this.radioLabel,
                selected: this.optionSelected,
                value: this.radioValue
            };

            this.optionChange.emit(option);
        }
    }
}
