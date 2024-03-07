import { Injectable } from '@angular/core';
import { AppViewMode } from '../../enums';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    isAdminView: boolean = false;
    isMenuBarExpanded: boolean = false;
    constructor() {
        this.isAdminLayout();
    }

    public toggleMenuBar(isExpand: boolean) {
        this.isMenuBarExpanded = isExpand;
    }

    private isAdminLayout() {
        const viewMode = AppViewMode.Admin;// sessionStorage.getItem("mode");
        if (!viewMode || Number(viewMode) === AppViewMode.User) {
            this.isAdminView = false;
            return;
        }

        this.isAdminView = true;
    }
}
