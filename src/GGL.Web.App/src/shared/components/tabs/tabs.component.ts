import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'ggl-tabs',
    standalone: true,
    imports: [
        NgClass,
        NgFor,
        NgIf
    ],
    templateUrl: './tabs.component.html',
    styleUrl: './tabs.component.scss'
})
export class TabsComponent implements AfterContentInit {
    @Input('disabled') isDisabled: boolean = false; 
    @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>;
    @Output('change') tabChange: EventEmitter<TabComponent> = new EventEmitter();
    constructor() {

    }

    ngAfterContentInit() {
        if (this.tabs) {
            const activeTabs = this.tabs.filter(tab => tab.active);

            if (activeTabs.length === 0) {
                this.selectTab(this.tabs.first);
            }
        }
    }

    selectTab(tab: TabComponent) {
        if (!tab || this.isDisabled) {
            return;
        }

        this.tabs?.toArray().forEach(tab => (tab.active = false));
        tab.active = true;

        if (this.tabChange) {
            this.tabChange.emit(tab);
        }
    }
}
