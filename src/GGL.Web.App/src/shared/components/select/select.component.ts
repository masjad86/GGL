import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectItem } from '../../models';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
    selector: 'ggl-select',
    standalone: true,
    imports: [
        NgIf,
        NgClass,
        NgFor,

        CheckboxComponent
    ],
    templateUrl: './select.component.html',
    styleUrl: './select.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SelectComponent {
    @Input() options: Array<SelectItem> = [];
    @Input() value: string = '';
    @Input('disabled') isDisabled: boolean = false;
    @Input('showBlankOption') addEmptyOption: boolean = true;
    @Input('placeholder') itemPlaceholder: string = '';
    @Output() valueChange: EventEmitter<string> = new EventEmitter(); 
    @Output('changed') selectionChanged: EventEmitter<SelectItem> = new EventEmitter(); 

    handleChange($event: any) {
        this.valueChange.emit($event.target.value);
        this.selectionChanged.emit();
    }
}
