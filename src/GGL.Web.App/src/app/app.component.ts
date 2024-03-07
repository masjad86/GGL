import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CountdownTimerComponent } from './client/countdown-timer/countdown-timer.component';
import { GettingStartedComponent } from './client/getting-started/getting-started.component';
//import { BlinkDirective } from '../directives/blink.directive';
//import { BlinkItemType } from '../enums/blink-item-type';
import { BannerComponent } from './client/banner/banner.component';
import { Event, EventService, GGL_ADMINMENU_ITEMS, GGL_MENU_ITEMS, GGL_TITLE, GlobalHeaderComponent, GlobalHeaderService, Menu, NavMenuComponent } from '../shared';
import { Subscription } from 'rxjs';
import { EventPortfolioComponent } from './client/event-portfolio/event-portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SubscriptionHelper } from '../helpers/subscript.helper';
import { AppViewMode } from '../shared/enums';
import { ADMIN_APP_VIEW, USER_APP_VIEW } from '../constants/app.constants';
import { LayoutService } from '../shared/services/layout/layout.service';

@Component({
    selector: 'ggl-root',
    standalone: true,
    imports: [
        // BlinkDirective,
        CommonModule,
        RouterOutlet,

        BannerComponent,
        HomeComponent,
        NavMenuComponent,
        FooterComponent,
        CountdownTimerComponent,
        GettingStartedComponent,
        EventPortfolioComponent,
        GlobalHeaderComponent,
        // Directives
        NgIf
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        HttpClientModule,
        GlobalHeaderService
    ],
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
    appMode: AppViewMode = USER_APP_VIEW;
    isAdminView: boolean = false;
    isAdminMenuBarExpanded = false;
    menuItems: Array<Menu> = [];
    //blinkItemType = BlinkItemType.IMAGE;
    blinkImageUrls: Array<string> = [
        '../assets/images/svg/Black-Logo-No-Bg.svg',
        '../assets/images/svg/White-Logo-No-Bg.svg',
        '../assets/images/svg/Color-Logo-No-Bg.svg'
    ];

    private subscriptions?: Array<Subscription> = [];

    constructor(private event: EventService,
        private layout: LayoutService) {
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

    onExpand(isExpand: boolean) {
        this.isAdminMenuBarExpanded = isExpand;
    }

    private initialize() {
        if (this.layout.isAdminView) {
            this.isAdminView = true;
            this.appMode = ADMIN_APP_VIEW;this.menuItems = GGL_ADMINMENU_ITEMS;
        } else {
            this.isAdminView = false;
            this.menuItems = GGL_MENU_ITEMS;
        }

        this.subscriptions?.push(this.event.getCurrentEvent().subscribe(e => {
            this.currentEvent = e;
        }));

        this.subscriptions?.push(this.event.getUpcomingEvent().subscribe(e => {
            this.nextEvent = e;
        }));
    }
}
