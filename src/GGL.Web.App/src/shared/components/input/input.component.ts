import { NgClass, NgIf } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { KEY_CODE_ENTER } from '../../../constants/app.constants';

@Component({
    selector: 'ggl-input',
    standalone: true,
    imports: [
        NgIf,
        NgClass,

        IconComponent
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
    @Input() enableSearch: boolean = false;
    @Output() valueChange: EventEmitter<any> = new EventEmitter();
    @Output('changed') valueChanged?: EventEmitter<any> = new EventEmitter();
    @Output('blured') valueBlur: EventEmitter<string> = new EventEmitter();
    @Output('search') valueSearch: EventEmitter<string> = new EventEmitter();
    @Output('keypressed') valueKeyPress: EventEmitter<string> = new EventEmitter();
    @Output('clicked') inputClick: EventEmitter<string> = new EventEmitter();
    @Output() iconClick: EventEmitter<any> = new EventEmitter();

    showInputValidation: boolean = false;

    constructor() {

    }

    handleChange($event: any) {
        if (!this.valueChanged) { return; }

        if (this.isRequired && !$event.value) {
            this.showInputValidation = true;
            return;
        }

        this.valueChange.emit($event.target.value);
        this.valueChanged.emit(this.value);
    }

    handleBlur($event: any) {
        if (!this.valueBlur) { return; }

        if (this.validateInput($event.value)) {
            this.showInputValidation = true;
            return;
        }

        this.valueChange.emit($event.target.value);
        this.valueBlur.emit(this.value);
    }

    handleKeyPress($event: any) {
        if (!this.valueKeyPress) { return; }
        if (this.enableSearch && $event.keyCode === KEY_CODE_ENTER) {
            this.handleSearch();
            return;
        }

        this.valueChange.emit($event.target.value);
        this.valueKeyPress.emit(this.value);
    }

    handleClick($event: any) {
        if (!this.inputClick) { return; }

        this.inputClick.emit(this.value);
    }

    handleSearch() {
        this.valueSearch.emit(this.value);
    }

    handleIconClick() {
        this.iconClick.emit();
    }

    private validateInput(value: string) {
        return this.isRequired && !value;
    }
}
