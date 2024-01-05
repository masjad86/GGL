import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SliderItemType, SliderItem } from './slider.model';

@Component({
	selector: 'ggl-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit {
	@Input() public items: Array<SliderItem<number>>;
	public selectedItem: SliderItem<number>;
	public showDialog: boolean;
	constructor(private changeDetectorRef: ChangeDetectorRef) { }
	public ngOnInit(): void {
		this.loadSliders();
	}


	public preview(item: SliderItem<number>, isClose: boolean = false) {
		this.selectedItem = item;
		this.showDialog = !isClose;
		this.changeDetectorRef.detectChanges();
	}

	private loadSliders() {
		if (this.items && this.items.length) {
			return;
		}

		this.items = [
			{ id: 1, url: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg', type: SliderItemType.IMAGE },
			{ id: 1, url: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).jpg', type: SliderItemType.IMAGE },
			// { id: 2, url: 'https://sec.ch9.ms/ch9/9aa2/efbb9172-d194-42b4-a61b-72d174889aa2/AzureSphere_high.mp4', type: SliderItemType.VIDEO },
			{ id: 3, url: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg', type: SliderItemType.IMAGE },
			{ id: 4, url: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg', type: SliderItemType.IMAGE },
			// { id: 5, url: 'https://www.youtube.com/embed/vlDzYIIOYmM', type: SliderItemType.VIDEO },
			{ id: 5, url: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(80).jpg', type: SliderItemType.IMAGE },
			{ id: 6, url: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(81).jpg', type: SliderItemType.IMAGE }
		];

		this.changeDetectorRef.detectChanges();
	}
}
