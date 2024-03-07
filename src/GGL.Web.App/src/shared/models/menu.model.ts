import { MenuIconSize } from '../enums';

export interface Menu {
	id: number | string;
	name: string;
	title: string;
	url?: string;
	icon?: MenuIcon;
	disable?: boolean;
	order?: number;
	active?: boolean;
	cssStyle?: string;
    click?: () => void;
	childrens?: Array<Menu>;
}

export interface MenuIcon {
	name: string;
	size: MenuIconSize;
}


