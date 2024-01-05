import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CarousalItem, Event, EventType } from '../../shared';
import { APP_FOLDERS } from '../../app.constant';

@Component({
	selector: 'ggl-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
	public carousalItems: Array<CarousalItem>;
	public eventItems: Array<Event>;
	public event: Event = { id: 2, name: 'Wedding', type: EventType.WEDDING_CEREMONY };
	public cssClass = 'hide';
	public today: Date = new Date();
	public carousalTitle = 'Checkout your date to celebrate your special moment';
	public carousalMessage = `Don't miss your special day and book your day without any delay. Check your celebration availability.`;
	constructor(private changeDetector: ChangeDetectorRef) { }

	public ngOnInit(): void {
		this.loadCarousal();
		this.loadEvents();
	}

	public toggleMenu() {
		this.cssClass = this.cssClass.indexOf('show') === -1 ? 'show' : 'hide';
		this.changeDetector.detectChanges();
	}

	public hideMenu() {
		this.cssClass = 'hide';
		this.changeDetector.detectChanges();
	}

	public selectedMenu(event) {
		this.event = event;
		this.changeDetector.detectChanges();
	}

	private loadCarousal() {
		this.carousalItems = [
			{
				id: 1, url: `${APP_FOLDERS.IMAGES_GALLERY_FOLDER_PATH}gallery- (13).jpg`,
				title: this.carousalTitle, message: this.carousalMessage
			},
			{
				id: 2, url: `${APP_FOLDERS.IMAGES_GALLERY_FOLDER_PATH}gallery- (21).jpg`,
				title: this.carousalTitle, message: this.carousalMessage
			},
			{
				id: 3, url: `${APP_FOLDERS.IMAGES_GALLERY_FOLDER_PATH}gallery- (31).jpg`, activeSlide: true,
				title: this.carousalTitle, message: this.carousalMessage
			},
			{
				id: 4, url: `${APP_FOLDERS.IMAGES_GALLERY_FOLDER_PATH}gallery- (24).jpg`,
				title: this.carousalTitle, message: this.carousalMessage
			}
		];

		this.changeDetector.detectChanges();
	}

	private loadEvents() {
		this.eventItems = [
			{ id: 1, name: 'Birthday', type: EventType.BIRTHDAY_PARTY },
			{ id: 2, name: 'Wedding', type: EventType.WEDDING_CEREMONY }
		];
	}
}
