import { CUSTOM_ELEMENTS_SCHEMA, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './client/footer/footer.component';
import { CountdownTimerComponent } from './client/countdown-timer/countdown-timer.component';
import { GettingStartedComponent } from './client/getting-started/getting-started.component';
import { HeaderComponent } from './client/header/header.component';
//import { BlinkDirective } from '../directives/blink.directive';
//import { BlinkItemType } from '../enums/blink-item-type';
import { BannerComponent } from './client/banner/banner.component';
import { Event, EventService, GGL_TITLE } from '../shared';
import { Subscription } from 'rxjs';
import { EventPortfolioComponent } from './client/event-portfolio/event-portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './client/home/home.component';
import { SubscriptionHelper } from '../helpers/subscript.helper';

@Component({
    selector: 'ggl-root',
    standalone: true,
    imports: [
        // BlinkDirective,
        CommonModule,
        RouterOutlet,

        BannerComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        CountdownTimerComponent,
        GettingStartedComponent,
        EventPortfolioComponent,

        // Directives
        NgIf
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        HttpClientModule,
    ]

})
export class AppComponent implements OnInit, OnDestroy {
    title: string = GGL_TITLE;
    currentEvent?: Event;
    nextEvent?: Event;
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

    private subscriptions?: Array<Subscription> = [];
    constructor(private eventService: EventService) {

    }

    ngOnInit(): void {
        this.initialize();
    }

    ngOnDestroy(): void {
        if (this.subscriptions) {
            SubscriptionHelper.Cleanup(this.subscriptions);
        }
    }

    hideTimer(isHide: boolean) {
        this.hideCountdownTimerSection = isHide;
    }

    private initialize() {
        this.subscriptions?.push(this.eventService.getCurrentEvent().subscribe(e => {
            this.currentEvent = e;
        }));

        this.subscriptions?.push(this.eventService.getUpcomingEvent().subscribe(e => {
            this.nextEvent = e;
        }));
    }
}
