import { ControlType, SelectItem } from "../../models";

export enum ContentAlignment {
    Center,
    Left,
    Right,
    Justify
}


export interface TableRow {
    rowClick?: () => void;
    rowStyle?: string;
    selected?: boolean;
    columns: Array<TableColumn>;
}

export interface TableColumn {
	id: string;
	name: string;
	title: string;
	type?: ControlType;
    value: any;
    align?: ContentAlignment;
    options?: Array<SelectItem>;
}

export interface TableColumnFilter {
	id: string;
	type: ControlType;
    options?: Array<SelectItem>;
}

export interface TableHeader {
    id: string;
    name: string;
    title:string;
    icon?: string;
}

export interface TablePager {
    index: number;
    selected: boolean;
}