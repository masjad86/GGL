import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './client/home/home.component';

const adminRoutes: Routes = [
    { path: 'admin', component: LoginComponent}
];

export const routes: Routes = [
    { path: 'admin', component: LoginComponent}
];

routes.concat(adminRoutes);
