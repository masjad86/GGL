import { Injectable } from '@angular/core';
import { FilterItem } from '../../models/filter-item.model';

@Injectable({
	providedIn: 'root'
})
export class GlobalFilterService {
	public filters: Array<FilterItem>;
	public showFilters: boolean;
	constructor() { 
        this.filters = [];
        this.showFilters = true;
    }
}
