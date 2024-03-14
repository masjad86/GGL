import { ControlType, SelectItem } from "../../models";

export interface TableRow {
    rowClick?: () => void;
    rowStyle?: string;
    columns: Array<TableColumn>;
}

export interface TableColumn {
	id: string;
	name: string;
	title: string;
	type?: ControlType;
    value: any;
    options?: Array<SelectItem>;
}

export interface TableHeader {
    id: string;
    name: string;
    title:string;
    icon?: string;
}
