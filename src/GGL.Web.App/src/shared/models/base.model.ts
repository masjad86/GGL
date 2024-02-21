export interface Base<T> {
	id: T;
	name: string;
}

export interface BaseItem<T> {
	id: T;
	url: string;
	title?: string;
	message?: string;
}
