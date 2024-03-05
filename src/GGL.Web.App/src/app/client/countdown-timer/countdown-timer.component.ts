import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, NgZone, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ggl-countdown-timer',
    standalone: true,
    imports: [],
    templateUrl: './countdown-timer.component.html',
    styleUrl: './countdown-timer.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownTimerComponent implements AfterViewInit {
    @Input("nextEventDate") nextEventDate?: Date;
    @Output("hideTimer") onHide: EventEmitter<boolean> = new EventEmitter<boolean>();
    nextEventDays: string = "00";
    nextEventHours: string = "00";
    nextEventMinutes: string = "00";
    nextEventSeconds: string = "00";

    constructor(private zone: NgZone,
        private changeDetectRef: ChangeDetectorRef) {
        
    }
    ngAfterViewInit(): void {
        this.zone.runOutsideAngular(() => {
            this.tickEventTimer();
        });
    }

    private tickEventTimer() {
        if (!this.nextEventDate) {
            this.onHide.emit(true);
            return;
        }

        const timer = setInterval(() => {
            const distance: number = this.nextEventDate!.getTime() - Date.now();
            if (distance < 0) {
                this.onHide.emit(true);
                clearInterval(timer);
                return;
            }

            var days = (Math.floor(distance / (1000 * 60 * 60 * 24))).toString();
            var hours = (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).toString();
            var minutes = (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).toString();
            var seconds = (Math.floor((distance % (1000 * 60)) / 1000)).toString();

            if (days !== undefined && days.length === 1) days = "0" + days;
            if (hours !== undefined && hours.length === 1) hours = "0" + hours;
            if (minutes !== undefined && minutes.length === 1) minutes = "0" + minutes;
            if (seconds !== undefined && seconds.length === 1) seconds = "0" + seconds;

            this.nextEventDays = days;
            this.nextEventHours = hours;
            this.nextEventMinutes = minutes;
            this.nextEventSeconds = seconds;

            this.onHide.emit(false);
            this.changeDetectRef.detectChanges();
        }, 1000);
    }
}
