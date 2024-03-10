import { ControlType, SelectItem } from "../../models";

type GridDataType = number | string | boolean;

export interface GridRow {
    rowClick?: () => void;
    rowStyle?: string;
    columns: Array<GridColumn>;
}

export interface GridColumn {
	id: string;
	name: string;
	title: string;
	type?: ControlType;
    value: any;
    options?: Array<SelectItem>;
}

export interface GridHeader {
    id: string;
    name: string;
    title:string;
    icon?: string;
}
