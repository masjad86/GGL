import { NgClass, NgIf } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { IconComponent } from '../icon/icon.component';
import { KEY_CODE_ENTER } from '../../../constants/app.constants';

@Component({
    selector: 'ggl-input',
    standalone: true,
    imports: [
        NgIf,
        NgClass,

        IconComponent,
        MatInputModule
    ],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputComponent {
    @Input() value: string = '';
    @Input() type: string = '';
    @Input() placeholder: string = '';
    @Input() cssStyle: string = '';
    @Input() showIcon: boolean = false;
    @Input('disabled') isDisabled: boolean = false;
    @Input('readonly') isReadonly: boolean = false;
    @Input() isRequired: boolean = false;
    @Input() errorMessage: string = '';
    @Input() icon?: string;
    @Input() enableSearch:  boolean = false;
    @Output('change') valueChanged: EventEmitter<any> = new EventEmitter(); 
    @Output('blur') valueBlur: EventEmitter<any> = new EventEmitter();
    @Output('search') valueSearch: EventEmitter<any> = new EventEmitter();
    @Output('keypress') valueKeyPress: EventEmitter<any> = new EventEmitter();

    showInputValidation: boolean = false;

    constructor() {

    }

    handleChange($event: any) {
        if (this.isRequired && !$event.value) {
            this.showInputValidation = true;
            return;
        }

        this.valueChanged.emit($event);
    }

    handleBlur($event: any) {
        if (this.validateInput($event.value)) {
            this.showInputValidation = true;
            return;
        }

        this.valueBlur.emit($event);
    }

    handleKeyPress($event: any) {
        if (this.enableSearch && $event.keyCode === KEY_CODE_ENTER) {
            this.handleSearch();
            return;
        }

        this.valueKeyPress.emit($event.target.value);
    }

    handleSearch() {
        this.valueSearch.emit(this.value);
    }

    private validateInput(value: string) {
        return this.isRequired && !value;
    }
}
