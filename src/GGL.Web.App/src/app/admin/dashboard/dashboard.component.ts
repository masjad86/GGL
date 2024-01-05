import { Component, OnInit } from '@angular/core';
import { GlobalHeaderService } from '../../shared';

@Component({
	selector: 'ggl-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	constructor(private globalHeaderService: GlobalHeaderService) { }

	public ngOnInit(): void {
		this.globalHeaderService.title = 'Dasbhoard';
	}

}
