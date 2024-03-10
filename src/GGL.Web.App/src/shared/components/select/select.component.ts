import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule, MatSelectTrigger } from '@angular/material/select';
import { SelectItem } from '../../models';

@Component({
    selector: 'ggl-select',
    standalone: true,
    imports: [
        MatSelectModule,
        MatOptionModule,
        MatSelectTrigger
    ],
    templateUrl: './select.component.html',
    styleUrl: './select.component.scss'
})
export class SelectComponent {
    @Input('items') options: Array<SelectItem> = [];
    @Input('selectedItems') selectedOptions: Array<SelectItem> = [];
    @Input('multiple') allowMultiple: boolean = false;
    @Output('change') selectionChanged: EventEmitter<any> = new EventEmitter(); 

    handleChange($event: HTMLSelectElement) {
        this.selectionChanged.emit($event.value);
    }

    handleCheck(item: SelectItem) {
        
    }
}
