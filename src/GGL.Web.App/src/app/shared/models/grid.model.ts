import { ControlType } from './filter-item.model';

export interface GridColumn {
	id: number | string;
	name: string;
	title: string;
	type: ControlType;
}
