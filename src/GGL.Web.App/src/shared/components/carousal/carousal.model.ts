import { BaseItem } from '../../models';

export interface CarousalItem extends BaseItem<number> {
	activeSlide?: boolean;
}
