import { Injectable } from '@angular/core';

@Injectable()
export class GlobalHeaderService {
	public title: string = '';
	public avatarImage: string = '';
	public showProgressBar: boolean = false;
	public showFilters: boolean = false;
	constructor() { }

	public showProgress(show = true) {
		this.showProgressBar = show;
	}
}
