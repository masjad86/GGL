import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { NotificationService } from './shared/services/notification-service/notification.service';
import { Menu, MenuIconSize, GlobalHeaderService, GlobalFilterService } from './shared';

@Component({
	selector: 'ggl-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
	@Input() public title = 'app';
	@Input() public user: any;
	public isFilterExpanded = true;
	public showFilter: boolean;
	public menus: Array<Menu> = [];
	public userRole = 0;
	constructor(
		private globalHeaderService: GlobalHeaderService,
		private globalFilterService: GlobalFilterService,
		private notificationService: NotificationService,
		private changeDetector: ChangeDetectorRef) {
	}

	public ngOnInit() {
		this.bindMenus();
		this.globalHeaderService.title = 'Home';
		this.showFilter = true;
	}

	public ngOnChanges(changes: SimpleChanges) {
		if (changes.showFilter.currentValue !== this.showFilter) {
			this.showFilter = this.globalFilterService.showFilters;
			this.changeDetector.detectChanges();
		}
	}

	private bindMenus() {
		this.menus = [{
			id: 1,
			name: 'Home',
			title: 'Home',
			url: '#',
			icon: { name: 'home', size: MenuIconSize.SMALL },
			cssStyle: 'nav-item',
			active: true,
			order: 1
		},
		{
			id: 2,
			name: 'Dashboard',
			title: 'Dashboard',
			url: 'admin/dashboard',
			cssStyle: 'nav-item',
			icon: { name: 'dashboard', size: MenuIconSize.SMALL },
			active: false,
			order: 2
		},
		{
			id: 3,
			name: 'Reports',
			title: 'Reports',
			url: '#',
			cssStyle: 'nav-item',
			icon: { name: 'file_copy', size: MenuIconSize.SMALL },
			active: false,
			order: 3
		},
		{
			id: 4,
			name: 'Settings',
			title: 'Settings',
			icon: { name: 'settings', size: MenuIconSize.SMALL },
			url: '#',
			cssStyle: 'nav-item',
			active: false,
			order: 4,
			childrens: [
				{
					id: 1,
					name: 'Events',
					title: 'Events',
					url: '#',
					icon: { name: 'file_copy', size: MenuIconSize.XXSMALL },
					active: false,
					order: 1
				},
				{
					id: 2,
					name: 'Booking',
					title: 'Booking',
					url: '#',
					icon: { name: 'assignment', size: MenuIconSize.XXSMALL },
					active: false,
					order: 2
				}
			]
		}];

	}
}
