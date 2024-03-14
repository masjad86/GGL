import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MultiSelectItem } from './multiselect.model';
import { IconTypes } from '../../enums/icon-type.enum';
import { OutsideClickDirective } from '../../directives';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { InputComponent } from '../input/input.component';
import { IconSize } from '../../enums';
import { IconPosition } from '../icon/icon.model';
import { CompareHelper } from '../../helpers';

@Component({
    selector: 'ggl-multiselect',
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        NgClass,

        IconComponent,
        InputComponent,
        OutsideClickDirective
    ],
    templateUrl: './multiselect.component.html',
    styleUrl: './multiselect.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MultiselectComponent implements OnInit {
    @Input() options: Array<MultiSelectItem> = [];
    @Input() showIcon: boolean = false;
    @Input() disabled: boolean = false;
    @Input() selectedOptions: Array<MultiSelectItem> = [];
    @Output() selectedOptionsChange: EventEmitter<Array<MultiSelectItem>> = new EventEmitter();

    filteredOptions: Array<MultiSelectItem> = [];
    closeIcon: string = IconTypes.CLOSE;
    closeIconSize: IconSize =  IconSize.SMALLER;
    closeIconPosition: IconPosition = IconPosition.Right;
    showOptions: boolean = false;
    showLabel: boolean = true;
    showOutline: boolean = false;
    dropdownIcon: string = IconTypes.CHEVRON_DOWN;
    showDropdownIcon: boolean = true;
    ngOnInit(): void {
        if (this.selectedOptions && this.selectedOptions.length) {
            this.removeItems(this.selectedOptions);
        }
        this.refreshOptions();
    }

    addItem(item: MultiSelectItem) {
        const remainingOptions = this.remove(this.options, item);
        this.options = remainingOptions;
        this.refreshOptions();
        this.selectedOptions.push(item);
        this.selectedOptionsChange.emit(this.selectedOptions);
    }

    removeItem(item: MultiSelectItem) {
        const remainingOptions = this.remove(this.selectedOptions, item);
        this.options.push(item);
        this.refreshOptions();
        this.selectedOptionsChange.emit(remainingOptions);
    }

    searchItem(value: any) {
        this.filteredOptions = this.options.filter(o => o.text.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    }

    toggle() {
        this.showOptions ? this.hideOption() : this.showOption();
    }

    showOption($event?: any) {
        this.showOptions = true;
    }

    hideOption() {
        this.showOptions = false;
    }

    private refreshOptions() {
        this.filteredOptions = this.options.sort((a, b) => CompareHelper.compareString(a.text, b.text));
    }

    private removeItems(items: Array<MultiSelectItem>) {
        items.every(i => this.remove(this.options, i));
    }

    private remove(options: Array<MultiSelectItem>, item: MultiSelectItem) {
        const index = options.findIndex(o => o.value == item.value && o.text === item.text);
        if (index > -1) {
            options.splice(index, 1);
        }

        return options;
    }
}
