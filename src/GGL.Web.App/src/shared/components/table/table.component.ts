import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableHeader, TableRow } from './table.model';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { IconTypes } from '../../enums/icon-type.enum';
import { ButtonComponent } from '../button/button.component';
import { TableRowComponent } from './table-row/table-row.component';
import { ADD_NEW, DELETE } from '../../constants';
import { TableColumnComponent } from './table-column/table-column.component';

@Component({
    selector: 'ggl-table',
    standalone: true,
    imports: [
        NgIf,
        NgClass,
        NgFor,

        ButtonComponent,
        TableColumnComponent,
        TableRowComponent,
        CheckboxComponent
    ],
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TableComponent implements OnInit {
    @Input() showHeader: boolean = true;
    @Input('selectable') showSelectCheckbox: boolean = false;
    @Input() showSelectAll: boolean = false;
    @Input() rows: Array<TableRow> = [];
    @Input() selectedRows: Array<TableRow> = [];
    @Input() headers: Array<TableHeader> = [];
    @Input() enableAction: boolean = false;
    @Input() showDelete: boolean = false;
    @Input() showAddNew: boolean = false;
    @Input() addNewLabel: string = ADD_NEW;
    @Input() deleteLabel: string = DELETE;
    @Output() addClick: EventEmitter<any> = new EventEmitter();
    @Output() deleteClick: EventEmitter<any> = new EventEmitter();
    @Output() rowClicked: EventEmitter<TableRow> = new EventEmitter();

    addButtonIcon: string = IconTypes.ADD;
    deleteButtonIcon: string = IconTypes.TRASH;
    showIcon: boolean = true;
    constructor() { }

    ngOnInit(): void {
    }

    handleAddClick() {
        this.addClick.emit();
    }

    handleDeleteClick() {
        this.deleteClick.emit();
    }

    handelSelectAll() {
        this.selectedRows = this.rows;
    }

    handleCheckbox() {
        if (this.selectedRows.length == this.rows.length) {

        }
    }

    isRowSelected(row: TableRow) {
        return false;
    }
}
