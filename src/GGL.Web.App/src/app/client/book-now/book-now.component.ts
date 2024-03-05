import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Legend } from '../../../models/legend';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { BookingCalendarComponent } from '../../../shared/components/booking-calendar/booking-calendar.component';
import { ViewMode } from '../../../enums';

@Component({
    selector: 'ggl-book-now',
    standalone: true,
    imports: [
        CommonModule,
        NgFor,
        NgClass,

        BookingCalendarComponent
    ],
    templateUrl: './book-now.component.html',
    styleUrl: './book-now.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BookNowComponent {
    viewMode: ViewMode = ViewMode.List;
    legends: Array<Legend> = [
        { name: 'Available', label: 'Available', icon: 'calendar-check', cssStyle: 'available' },
        { name: 'Booked', label: 'Booked', icon: 'calendar-check', cssStyle: 'booked' },
        { name: 'EnquiryReceived', label: 'Enquiry', icon: 'calendar-check', cssStyle: 'open-enquiry' },
    ];
}
