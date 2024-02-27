import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './client/footer/footer.component';
import { CountdownTimerComponent } from './client/countdown-timer/countdown-timer.component';
import { GettingStartedComponent } from './client/getting-started/getting-started.component';
import { HeaderComponent } from './client/header/header.component';
//import { BlinkDirective } from '../directives/blink.directive';
//import { BlinkItemType } from '../enums/blink-item-type';
import { BannerComponent } from './client/banner/banner.component';
import { GGL_TITLE } from '../shared';

@Component({
    selector: 'ggl-root',
    standalone: true,
    imports: [
        // BlinkDirective,
        CommonModule, 
        RouterOutlet,

        BannerComponent,
        HeaderComponent,
        FooterComponent,
        CountdownTimerComponent,
        GettingStartedComponent,
        NgIf
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
    title: string = GGL_TITLE;
    currentEventDate?: Date = undefined;
    nextEventDate?: Date = undefined;
    hideCountdownTimerSection: boolean = false;
    nextEventDays: string = "00";
    nextEventHours: string = "00";
    nextEventMinutes: string = "00";
    nextEventSeconds: string = "00";
    //blinkItemType = BlinkItemType.IMAGE;
    blinkImageUrls: Array<string> = [
        '../assets/images/svg/Black-Logo-No-Bg.svg',
        '../assets/images/svg/White-Logo-No-Bg.svg',
        '../assets/images/svg/Color-Logo-No-Bg.svg'
    ];
    
    constructor() { }
    
    private tickEventTimer() {
        var now = new Date().getTime();

        if (!this.currentEventDate && this.nextEventDate) {
            this.currentEventDate = this.nextEventDate;
        }

        if (this.currentEventDate) {
            const distance: number = this.currentEventDate.getTime() - now;
            if (distance < 0) {
                this.hideCountdownTimerSection = true;
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

            this.hideCountdownTimerSection = false;
        } else {
            this.hideCountdownTimerSection = true;
        }
    }
}
