import { NgIf } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EventPortfolioComponent } from '../event-portfolio/event-portfolio.component';
import { CarousalComponent, Event, EventService } from '../../../shared';
import { Subscription } from 'rxjs';
import { SubscriptionHelper } from '../../../helpers/subscript.helper';

@Component({
    selector: 'ggl-home',
    standalone: true,
    imports: [
        NgIf,

        CarousalComponent,
        EventPortfolioComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
    currentEvent?: Event;
    private subscriptions: Array<Subscription> = [];

    constructor(private eventService: EventService) {

    }

    ngOnDestroy(): void {
        if (this.subscriptions) {
            SubscriptionHelper.Cleanup(this.subscriptions);
        }
    }

    ngOnInit(): void {
        this.subscriptions.push(this.eventService.getCurrentEvent().subscribe(e => {
            this.currentEvent = e;
        }));
    }
}
