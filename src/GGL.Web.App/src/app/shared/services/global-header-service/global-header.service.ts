import { Injectable } from '@angular/core';

@Injectable()
export class GlobalHeaderService {
	public title: string;
	public avatarImage: string;
	public showProgressBar: boolean;
	public showFilters: boolean;
	constructor() { }

	public showProgress(show = true) {
		this.showProgressBar = show;
	}
}
