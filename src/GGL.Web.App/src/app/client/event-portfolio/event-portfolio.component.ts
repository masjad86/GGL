import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CommonEventInfo, Event, EventType, WeddingEventInfo } from '../../../shared';
import { DatePipe, NgIf } from '@angular/common';
import { PortfolioComponent } from '../../../shared/components/portfolio/portfolio.component';

@Component({
    selector: 'ggl-event-portfolio',
    standalone: true,
    imports: [
        NgIf,
        DatePipe,

        PortfolioComponent
    ],
    templateUrl: './event-portfolio.component.html',
    styleUrl: './event-portfolio.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventPortfolioComponent implements OnInit {
    @Input() currentEvent?: Event;
    weddingEventInfo?: WeddingEventInfo;
    commonEventInfo?: CommonEventInfo;

    constructor(private changeDetectRef: ChangeDetectorRef) {
        
    }
    ngOnInit(): void {
        this.setEventInfo();
    }

    private setEventInfo() {
        switch (this.currentEvent?.type) {
            case EventType.WEDDING_CEREMONY:
            case EventType.ENGAGEMENT:
            case EventType.RECEPTION:
                this.weddingEventInfo = this.currentEvent?.info as WeddingEventInfo;
                break;
            case EventType.BIRTHDAY_PARTY:
            case EventType.OTHER:
                this.commonEventInfo = this.currentEvent.info as CommonEventInfo;
                break;
        }

        this.changeDetectRef.detectChanges();
    }
}
