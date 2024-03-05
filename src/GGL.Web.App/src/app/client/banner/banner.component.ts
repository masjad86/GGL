import { DatePipe, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Event, EventType } from '../../../shared';

@Component({
    selector: 'ggl-banner',
    standalone: true,
    imports: [
        NgIf,
        DatePipe
    ],
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss', '../../../assets/css/rain.scss']
})

export class BannerComponent implements OnInit {
    @Input() title: string = "";
    @Input("nextEvent") event?: Event;

    quotes: string = "";

    ngOnInit(): void {
        if (this.event) {
            switch(this.event.type) {
                case EventType.WEDDING_CEREMONY:
                    this.quotes =  "Celebrate your "+ this.event.name + " and get ready on";
            }
        }
    }
}
