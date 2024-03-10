import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { GridColumnComponent } from '../grid-column/grid-column.component';
import { GridRow } from '../grid.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'ggl-grid-row',
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        
        GridColumnComponent
    ],
    templateUrl: './grid-row.component.html',
    styleUrl: './grid-row.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridRowComponent {
    @Input() item: GridRow = { columns: [] };
    @Input() showCheckbox: boolean = false;
    @Output() rowClick: EventEmitter<GridRow> = new EventEmitter();

    handleRowClick() {
        this.rowClick.emit(this.item);
    }
}
