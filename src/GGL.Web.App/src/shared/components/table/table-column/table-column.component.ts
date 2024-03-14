import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumn } from '../table.model';
import { ControlType } from '../../../models';
import { ButtonComponent } from '../../button/button.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'ggl-table-column',
    standalone: true,
    imports: [
        NgIf,
        
        ButtonComponent
    ],
    templateUrl: './table-column.component.html',
    styleUrl: './table-column.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TableColumnComponent implements OnInit {
    @Input() column?: TableColumn;
    @Input() selectable: boolean = false;
    @Output('clicked') checkboxClick: EventEmitter<boolean> = new EventEmitter();

    isSelected: boolean = false;
    isLabelClickable: boolean = false;
    constructor() {
        
    }
    ngOnInit(): void {
        switch(this.column?.type) {
            case ControlType.LINKBUTTON:
                this.isLabelClickable = true;
                return;
            default:
                this.isLabelClickable = false;
        }
    }

    handleCheckboxChange($event: boolean) {
        this.isSelected = $event;
        if (this.checkboxClick) {
            this.checkboxClick.emit(this.isSelected);
        }
    }
}
