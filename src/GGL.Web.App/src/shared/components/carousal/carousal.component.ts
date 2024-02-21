import { Component, OnInit, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarousalItem } from './carousal.model';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
	selector: 'ggl-carousal',
    standalone: true,
    imports: [
        NgClass,
        NgIf,
        NgFor
    ],
	templateUrl: './carousal.component.html',
	styleUrls: ['./carousal.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarousalComponent implements OnInit {
	@Input() public images: Array<CarousalItem> = [];
	@Input() public showArrows = true;
	@Input() public showIndicators = true;
	@Input() public interval = 2000; // 2 seconds
	@Input() public keyboard = true;
	@Input() public pauseOnHover = true;
	@Input() public wrap = true;
	@Input() public defaultSlide: any;
	@Input() public enableTileView = false;
	constructor() { }

	public ngOnInit(): void {
		if (!this.defaultSlide && this.images && this.images.length) {
			this.defaultSlide = this.images.find(x => x.activeSlide);
		}
	}

}
