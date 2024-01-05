import { Component, OnInit } from '@angular/core';
import { GlobalFilterService } from '../../services';
import { FilterItem, ControlType } from '../../models';

@Component({
	selector: 'ggl-global-filter',
	templateUrl: './global-filter.component.html',
	styleUrls: ['./global-filter.component.css']
})
export class GlobalFilterComponent implements OnInit {
	public filters: Array<FilterItem>;
	public showFilters: boolean;

	public TEXTBOX = ControlType.TEXTBOX;
	public MULTISELECT = ControlType.MULTISELECT;
	public SELECT = ControlType.SELECT;
	public RADIO = ControlType.RADIO;
	public TOGGLE = ControlType.TOGGLE;
	public SLIDER = ControlType.SLIDER;
	constructor(private globalFilterService: GlobalFilterService) { }

	public ngOnInit(): void {
		this.filters = this.globalFilterService.filters;
		this.showFilters = this.globalFilterService.showFilters;
		this.bindFilters();
	}

	private bindFilters() {
		this.filters = [
			{ id: 1, name: 'firstName', displayLabel: 'First Name', placeholder: 'First Name', controlType: ControlType.TEXTBOX },
			{
				id: 2, name: 'country', displayLabel: 'Country', placeholder: 'Country', controlType: ControlType.SELECT, options: [
					{ id: 1, name: 'India', value: 1, checked: true },
					{ id: 2, name: 'Australia', value: 2 }
				]
			},
			{
				id: 3, name: 'gender', displayLabel: 'Gender', placeholder: 'Gender', controlType: ControlType.RADIO, options: [
					{ id: 1, name: 'Male', value: 1, checked: true },
					{ id: 2, name: 'Female', value: 2 }
				]
			},
			{ id: 4, name: 'price', displayLabel: 'Price', placeholder: 'Pricing', controlType: ControlType.SLIDER, enabled: true },
			{
				id: 2, name: 'country', displayLabel: 'Country', placeholder: 'Country', controlType: ControlType.MULTISELECT, options: [
					{ id: 1, name: 'India', value: 1, checked: true },
					{ id: 2, name: 'Australia', value: 2 }
				]
			},
		];
	}

}
