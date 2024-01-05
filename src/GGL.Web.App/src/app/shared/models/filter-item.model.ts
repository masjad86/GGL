import { EventEmitter } from '@angular/core';



export interface FilterItem {
	id: number | string;
	name: string;
	controlType: ControlType;
	displayLabel: string;
	enabled?: boolean;
	action?: EventEmitter<any>;
	ngModel?: any;
	options?: Array<ListItem>;
	placeholder: string;
	value?: any;
	order?: number;
	cssClass?: string;
	color?: string;
}

export enum ControlType {
	BUTTON,
	CHECKBOX,
	LABEL,
	LINKBUTTON,
	MULTISELECT,
	RADIO,
	SELECT,
	SLIDER,
	TEXTBOX,
	TOGGLE,
}

export interface ListItem {
	id: string | number;
	name: string;
	value: any;
	checked?: boolean;
}

