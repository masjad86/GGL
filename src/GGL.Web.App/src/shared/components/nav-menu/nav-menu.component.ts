import {
    Component, OnInit, ChangeDetectionStrategy, AfterViewInit,
    Input, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, Output, EventEmitter
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { Menu } from '../../models';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { AppViewMode, IconSize } from '../../enums';
import { ADMIN_APP_VIEW } from '../../../constants/app.constants';
import { LogoComponent } from '../../../app/client/logo/logo.component';
import { COLLAPSE_TITLE, EXPAND_TITLE } from '../../constants';
import { LayoutService } from '../../services';
import { NavItemComponent } from './nav-item/nav-item.component';

@Component({
    selector: 'ggl-nav-menu',
    standalone: true,
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        NgClass,
        NgIf,
        NgFor,

        LogoComponent,
        NavItemComponent,

        MatIconModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent implements OnInit, AfterViewInit {
    @Input('items') menuItems: Array<Menu> = [];
    @Input() mode: AppViewMode = AppViewMode.User;

    isAdminView: boolean = false;
    expandCollapseTitle: string = 'Expand';
    isMenuBarExpanded: boolean = false;
    expandMenuItem?: Menu;

    constructor(private cdr: ChangeDetectorRef,
        private layout: LayoutService) { }

    public ngOnInit(): void {
        this.intialize();
    }

    public ngAfterViewInit() {
    }

    public expandCollapse(menu: Menu) {
        this.isMenuBarExpanded = !this.isMenuBarExpanded;
        this.expandCollapseTitle = this.isMenuBarExpanded ? COLLAPSE_TITLE : EXPAND_TITLE;
        this.cdr.detectChanges();
        menu.name = this.expandCollapseTitle;
        menu.title = this.expandCollapseTitle;
        this.layout.toggleMenuBar(this.isMenuBarExpanded);
    }

    private intialize() {
        this.isAdminView = this.mode === ADMIN_APP_VIEW;
        this.expandMenuItem = {
            id: 'expand', name: this.expandCollapseTitle, title: this.expandCollapseTitle,
            icon: { name: 'double_arrow', size: IconSize.DEFAULT }, 
            cssStyle: 'special-menu expand-nav',
        };

        this.cdr.detectChanges();
    }
}
