import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component,  OnDestroy, OnInit } from '@angular/core';
import { EventPortfolioComponent } from '../client/event-portfolio/event-portfolio.component';
import { CarousalComponent, Event, EventService } from '../../shared';
import { Subscription } from 'rxjs';
import { SubscriptionHelper } from '../../helpers/subscript.helper';
import { LayoutService } from '../../shared/services';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';

@Component({
    selector: 'ggl-home',
    standalone: true,
    imports: [
        NgIf,

        CarousalComponent,
        EventPortfolioComponent,
        DashboardComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
    currentEvent?: Event;
    isAdminView: boolean = false;
    private subscriptions: Array<Subscription> = [];

    constructor(private eventService: EventService,
        private layout: LayoutService,
        private cdr: ChangeDetectorRef) {

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

        this.isAdminView = this.layout.isAdminView;

        this.cdr.detectChanges();
    }
}
