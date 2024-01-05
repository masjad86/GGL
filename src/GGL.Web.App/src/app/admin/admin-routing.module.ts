import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanActivateGuard } from '../shared/guards';
import { BookingDetailComponent } from './booking';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
	{ path: 'admin/dashboard', component: DashboardComponent },
	{ path: 'admin/booking/:id', canActivate: [CanActivateGuard], component: BookingDetailComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
