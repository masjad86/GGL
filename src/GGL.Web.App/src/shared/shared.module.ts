import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppMaterialModule } from '../external';
import {
	BellNotificationComponent,
	BookingNotificationComponent,
	CarousalComponent,
	ClientFooterComponent,
	GlobalFilterComponent,
	GlobalHeaderComponent,
	GridComponent,
	NavMenuComponent,
	NavSubMenuComponent,
	SliderComponent,
} from './components';
import { OutsideClickDirective } from './directives';

@NgModule({
	imports: [AppMaterialModule, CommonModule, FormsModule, NgbModule],
	declarations: [
		// shared components
		BellNotificationComponent,
		BookingNotificationComponent,
		CarousalComponent,
		ClientFooterComponent,
		GlobalHeaderComponent,
		GlobalFilterComponent,
		GridComponent,
		NavMenuComponent,
		NavSubMenuComponent,
		SliderComponent,
		// directives
		OutsideClickDirective
	],
	exports: [
		BellNotificationComponent,
		BookingNotificationComponent,
		CarousalComponent,
		ClientFooterComponent,
		GlobalHeaderComponent,
		GlobalFilterComponent,
		GridComponent,
		NavMenuComponent,
		NavSubMenuComponent,
		SliderComponent,
		// directives
		OutsideClickDirective
	],
	providers: []
})

export class SharedModule { }
