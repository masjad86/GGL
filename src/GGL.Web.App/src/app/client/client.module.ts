import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule, AppBootstrapModule } from '../external';
import { SharedModule } from '../shared/shared.module';


@NgModule({
	declarations: [HomeComponent],
	imports: [
		AppBootstrapModule,
		AppMaterialModule,
		CommonModule,
		ClientRoutingModule,
		SharedModule
	],
	exports: [
		HomeComponent
	]
})
export class ClientModule { }
