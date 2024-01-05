import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		NgbModule
	],
	exports: [
		NgbModule,
		NgbDatepicker
	]
})
export class AppBootstrapModule { }
