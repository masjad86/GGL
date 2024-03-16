import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { SelectItem } from '../../models';
import { LabelComponent } from '../label/label.component';
import { Orientation } from '../../../enums';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';

@Component({
    selector: 'ggl-list',
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        NgClass,

        CheckboxComponent,
        LabelComponent,
        IconComponent
    ],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{
    @Input() items: Array<SelectItem> = [];
    @Input() disabled: boolean = false;
    @Input() showDefaultAction: boolean = false;
    @Input() height: number = 200;
    @Input() orientation: Orientation = Orientation.Vertical;
    @Input('actionLabel') itemActionLabel: string = '';
    @Input() showIcon: boolean = false;
    @Input('actionIcon') itemActionIcon: string = '';
    @Output() itemClick: EventEmitter<any> = new EventEmitter();

    itemClickable: boolean = true;
    layoutCss: string = 'orientation-vertical';

    ngOnInit(): void {
        this.layoutCss = this.orientation === Orientation.Horizontal ? 'orientation-horizontal' : 'orientation-vertical';
    }

    handleClick(item:SelectItem) {
        this.itemClick.emit(item);
    }
}
