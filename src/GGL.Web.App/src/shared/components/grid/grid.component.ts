import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridColumn, GridHeader, GridRow } from './grid.model';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { IconTypes } from '../../enums/icon-type.enum';
import { ButtonComponent } from '../button/button.component';
import { GridRowComponent } from './grid-row/grid-row.component';
import { ADD_NEW, DELETE } from '../../constants';

@Component({
    selector: 'ggl-grid',
    standalone: true,
    imports: [
        NgIf,
        NgClass,
        NgFor,

        ButtonComponent,
        GridRowComponent,
        CheckboxComponent
    ],
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridComponent implements OnInit {
    @Input() showHeader: boolean = true;
    @Input() showHeaderCheckbox: boolean = false;
    @Input() rows: Array<GridRow> = [];
    @Input() headers: Array<GridHeader> = [];
    @Input() enableAction: boolean = false;
    @Input() showDelete: boolean = false;
    @Input() showAddNew: boolean = false;
    @Input() addNewLabel: string = ADD_NEW;
    @Input() deleteLabel: string = DELETE;
    @Output() addClick: EventEmitter<any> = new EventEmitter();
    @Output() deleteClick: EventEmitter<any> = new EventEmitter();
    @Output() rowClicked: EventEmitter<GridRow> = new EventEmitter();

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
}
