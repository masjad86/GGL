import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { BookingDetailComponent } from './booking/booking-detail/booking-detail.component';
import { LoginComponent } from './login/login.component';


@NgModule({
	declarations: [DashboardComponent, BookingComponent, BookingDetailComponent, LoginComponent],
	imports: [
		CommonModule,
		AdminRoutingModule
	],
	exports: [
		DashboardComponent,
		LoginComponent
	]
})
export class AdminModule { }
