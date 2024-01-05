import { Component, OnInit } from '@angular/core';
import { SliderItem } from '../slider/slider.model';

@Component({
	selector: 'ggl-client-footer',
	templateUrl: './client-footer.component.html',
	styleUrls: ['./client-footer.component.scss']
})
export class ClientFooterComponent implements OnInit {
	public year: number = new Date().getFullYear();
	public sliderItems: Array<SliderItem<number>>;

	constructor() { }

	ngOnInit(): void {
	}

}
