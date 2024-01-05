import { Component, OnInit, Input } from '@angular/core';
import { CarousalItem } from './carousal.model';

@Component({
	selector: 'ggl-carousal',
	templateUrl: './carousal.component.html',
	styleUrls: ['./carousal.component.scss']
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
