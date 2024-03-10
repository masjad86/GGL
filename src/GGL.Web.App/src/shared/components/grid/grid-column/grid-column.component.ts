import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { GridColumn } from '../grid.model';
import { ControlType } from '../../../models';
import { ButtonComponent } from '../../button/button.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'ggl-grid-column',
    standalone: true,
    imports: [
        NgIf,
        
        ButtonComponent
    ],
    templateUrl: './grid-column.component.html',
    styleUrl: './grid-column.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridColumnComponent {
    @Input() column?: GridColumn;

    isControlTypeLabel: boolean = false;
    isControlTypeLink: boolean = false;
    constructor() {
        switch(this.column?.type) {
            case ControlType.LINKBUTTON:
                this.isControlTypeLink = true;
                return;
            default:
                this.isControlTypeLabel = true;
        }
    }
}
