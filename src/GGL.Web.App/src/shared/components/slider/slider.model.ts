import { BaseItem } from '../../models';

export interface SliderItem<T> extends BaseItem<T> {
	type?: SliderItemType;
}

export enum SliderItemType {
	IMAGE,
	VIDEO
}
