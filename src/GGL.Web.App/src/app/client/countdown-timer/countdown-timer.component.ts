import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ggl-countdown-timer',
    standalone: true,
    imports: [],
    templateUrl: './countdown-timer.component.html',
    styleUrl: './countdown-timer.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
    public nextEventDays: string = "00";
    public nextEventHours: string = "00";
    public nextEventMinutes: string = "00";
    public nextEventSeconds: string = "00";
    public currentEventDate: Date = new Date();
    public upcomingEventDate: Date = new Date();
    public tickEventTimerHandler?: NodeJS.Timeout;
    @Output('hide') hideCountdownTimer: EventEmitter<boolean> = new EventEmitter();

    private isCountdownStopped: boolean = true;

    constructor() {
        const today = new Date();
        this.currentEventDate = new Date(today.getFullYear(), today.getMonth(), today.getDay() + 3);
        this.tickEventTimerHandler = setInterval(this.tickEventTimer, 1000);
    }
    ngOnDestroy(): void {
        if (this.tickEventTimerHandler) {
            // clearInterval(this.tickEventTimerHandler);
        }
    }

    ngOnInit(): void {
        
    }

    private tickEventTimer() {
        var now = new Date().getTime();

        if (!this.currentEventDate && this.upcomingEventDate) {
            this.currentEventDate = this.upcomingEventDate;
        }

        if (this.currentEventDate) {
            const distance: number = this.currentEventDate.getTime() - now;
            if (distance < 0) {
                this.hideCountdownTimer.emit(true);
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

            this.isCountdownStopped = false;
        } else {
            this.isCountdownStopped = true;
        }

        if (this.isCountdownStopped) {
            this.hideCountdownTimer.emit(this.isCountdownStopped);
        }
    }
}
