import { Component, Input, OnInit } from '@angular/core';
import { TableColumnFilter } from '../table.model';
import { NgClass, NgIf } from '@angular/common';
import { InputComponent } from '../../input/input.component';
import { SelectComponent } from '../../select/select.component';
import { ControlType } from '../../../models';
import { DatePickerComponent } from '../../datepicker/datepicker.component';

@Component({
    selector: 'ggl-table-column-filter',
    standalone: true,
    imports: [
        NgIf,
        NgClass,

        DatePickerComponent,
        InputComponent,
        SelectComponent
    ],
    templateUrl: './table-column-filter.component.html',
    styleUrl: './table-column-filter.component.scss'
})
export class TableColumnFilterComponent implements OnInit {
    @Input() column?: TableColumnFilter;
    @Input() width: number = 100; // in percentage

    isInputFilter: boolean = false;
    isDropdownFilter: boolean = false;
    isDateFilter: boolean = false;

    ngOnInit(): void {
        this.isInputFilter = this.column?.type === ControlType.TEXTBOX;
        this.isDropdownFilter = this.column?.type === ControlType.SELECT;
        this.isDateFilter = this.column?.type === ControlType.DATEPICKER;
    }
}
