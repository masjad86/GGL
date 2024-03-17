import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContentAlignment, TableColumn } from '../table.model';
import { ControlType } from '../../../models';
import { ButtonComponent } from '../../button/button.component';
import { NgIf } from '@angular/common';
import { CheckboxComponent } from '../../checkbox/checkbox.component';
import { LabelComponent } from '../../label/label.component';

@Component({
    selector: 'ggl-table-column',
    standalone: true,
    imports: [
        NgIf,

        CheckboxComponent,
        LabelComponent,
        ButtonComponent
    ],
    templateUrl: './table-column.component.html',
    styleUrl: './table-column.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TableColumnComponent implements OnInit {
    @Input() column?: TableColumn;
    @Input() width: number = 100; // in percentage
    @Input() selectable: boolean = false;
    @Input() selected: boolean = false;
    @Output('clicked') checkboxClick: EventEmitter<boolean> = new EventEmitter();

    isLabelClickable: boolean = false;
    columnAlignment: string = '';
    constructor() {

    }
    ngOnInit(): void {
        if (this.selectable) {
            this.width = 5;
        }

        switch (this.column?.type) {
            case ControlType.LINKBUTTON:
                this.isLabelClickable = true;
                return;
            default:
                this.isLabelClickable = false;
        }
    }

    handleCheckboxChange($event: boolean) {
        this.selected = $event;
        if (this.checkboxClick) {
            this.checkboxClick.emit(this.selected);
        }
    }

    private setAlignmentClass() {
        switch (this.column?.align) {
            case ContentAlignment.Left:
                this.columnAlignment = "left";
                return;
            case ContentAlignment.Center:
                this.columnAlignment = "centered";
                return;
            case ContentAlignment.Justify:
                this.columnAlignment = "jusitfy";
                return;
            case ContentAlignment.Right:
                this.columnAlignment = "right";
                return;
            default:
                this.columnAlignment = "left";
        }
    }
}
