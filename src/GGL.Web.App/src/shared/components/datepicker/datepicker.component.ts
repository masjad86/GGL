import { Component, Input } from '@angular/core';
import { DateFormat } from './datepicker.model';

@Component({
    selector: 'ggl-date-picker',
    standalone: true,
    imports: [],
    templateUrl: './datepicker.component.html',
    styleUrl: './datepicker.component.scss'
})
export class DatePickerComponent {
    @Input() value: string = '';
    @Input() disabled: boolean = false;
    @Input() format: DateFormat = DateFormat.DD_MM_YYYY;
}
