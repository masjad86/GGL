import {
    CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, OnInit, Output
} from '@angular/core';
import { TableColumnFilter, TableHeader, TablePager, TableRow } from './table.model';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { IconTypes } from '../../enums/icon-type.enum';
import { ButtonComponent } from '../button/button.component';
import { LabelComponent } from '../label/label.component';
import { TableColumnComponent } from './table-column/table-column.component';
import { TableColumnFilterComponent } from './table-column-filter/table-column-filter.component';
import { ADD_NEW, DELETE } from '../../constants';

@Component({
    selector: 'ggl-table',
    standalone: true,
    imports: [
        NgIf,
        NgClass,
        NgFor,

        ButtonComponent,
        CheckboxComponent,
        LabelComponent,
        TableColumnComponent,
        TableColumnFilterComponent
    ],
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TableComponent implements OnInit {
    @Input() pageSize: number = 10;
    @Input() pageIndex: number = 1;
    @Input() pages: Array<TablePager> = [];
    @Input() selectable: boolean = false;
    @Input() rows: Array<TableRow> = [];
    @Input() filters: Array<TableColumnFilter> = [];
    @Input() headers: Array<TableHeader> = [];
    @Input() height: number = 0;
    @Input() width: number = 100;
    @Input() disabled: boolean = false;
    @Input() enableAction: boolean = false;
    @Input() allowSorting: boolean = true;
    @Input() showHeader: boolean = true;
    @Input() showPaging: boolean = true;
    @Input() showFilter: boolean = false;
    @Input() showDelete: boolean = false;
    @Input() showAddNew: boolean = false;
    @Input() addNewLabel: string = ADD_NEW;
    @Input() deleteLabel: string = DELETE;
    @Output() addClick: EventEmitter<any> = new EventEmitter();
    @Output() deleteClick: EventEmitter<any> = new EventEmitter();
    @Output() pageChanged: EventEmitter<any> = new EventEmitter();
    @Output() rowClicked: EventEmitter<TableRow> = new EventEmitter();
    @Output() rowChange: EventEmitter<Array<TableRow>> = new EventEmitter();

    rowSelected: boolean = false;
    addButtonIcon: string = IconTypes.ADD;
    deleteButtonIcon: string = IconTypes.TRASH;
    showIcon: boolean = true;
    averageColumnWidth = 0;
    constructor() { }

    ngOnInit(): void {
        this.calculateColumnWidth();
    }

    handleAddClick() {
        this.addClick.emit();
    }

    handleDeleteClick() {
        this.deleteClick.emit();
    }

    handelSelectAll($event: boolean) {
        this.rows = this.rows.map(x => {
            x.selected = $event;
            return x;
        });

        this.rowChange.emit(this.rows);
    }

    handleCheckbox($event: TableRow, index: number) {
        if (this.rows.length == this.rows.length) {

        }
    }

    handleRowClick(row: TableRow, index: number) {
        if (this.selectable) {
            row.selected = !row.selected;
            this.rows = this.rows.map((m, i) => {
                if (i === index) {
                    m.selected = row.selected
                }

                return m;
            });
            this.rowChange.emit(this.rows);
            this.rowClicked.emit(row);
        }
    }

    handlePage(action: string) {
        let currentPage: number = 1;
        switch (action) {
            case 'first':
                currentPage = 1;
                break;
            case 'previous':
                currentPage = this.pageIndex ? this.pageIndex - 1 : 1;
                break;
            case 'next':
                currentPage = this.pageIndex && this.pages.length === this.pageIndex
                    ? this.pages.length
                    : this.pageIndex + 1;
                break;
            case 'last':
                currentPage = this.pages.length;
                break;
        }

        this.handleSelectedPage(currentPage);
    }

    handleSelectedPage(index: number) {
        this.pageIndex = index;
        this.pages = this.pages.map(x => {
            x.selected = x.index === this.pageIndex;
            return x;
        });
        this.pageChanged.emit(index);
    }

    private calculateColumnWidth() {
        let availableWidth: number = 100;

        if (this.selectable) {
            availableWidth -= 5;
        }

        if (this.headers && this.headers.length < 6) {
            this.averageColumnWidth = Math.floor(availableWidth / this.headers.length);
        }
    }
}
