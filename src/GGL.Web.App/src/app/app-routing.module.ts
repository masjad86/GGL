import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
import { NgModule } from '@angular/core';


const appRoutes: Routes = [
	{ path: '', component: HomeComponent }
];

@NgModule({
	imports: [RouterModule.forChild(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule {

}
