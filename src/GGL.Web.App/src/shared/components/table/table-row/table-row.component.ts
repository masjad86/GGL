import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { TableColumnComponent } from '../table-column/table-column.component';
import { TableRow } from '../table.model';

@Component({
    selector: 'ggl-table-row',
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        NgClass,

        TableColumnComponent
    ],
    templateUrl: './table-row.component.html',
    styleUrl: './table-row.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TableRowComponent {
    @Input() item: TableRow = { columns: [] };
    @Input() selectable: boolean = false;
    @Input() columnWidth: number = 0;
    @Output() rowClick: EventEmitter<TableRow> = new EventEmitter();

    rowSelected: boolean = false;
    handleRowClick() {
        this.rowSelected = !this.rowSelected;
        this.rowClick.emit({
            ...this.item,
            selected: this.rowSelected
        });
    }
}
