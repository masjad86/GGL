import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { GalleryComponent } from './client/gallery/gallery.component';
import { BookNowComponent } from './client/book-now/book-now.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard';
import { BookingComponent } from './admin/booking/booking.component';
import { TestPageComponent } from '../shared/test-page/test-page.component';

const adminRoutes: Routes = [
    { path: 'admin/login', component: LoginComponent },
    { path: 'admin', component: DashboardComponent },
    { path: 'admin/dashboard', component: DashboardComponent },
    { path: 'admin/booking', component: BookingComponent },
    { path: 'admin/test-page', component: TestPageComponent }
];

const clientRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'booknow', component: BookNowComponent }  
];


export const routes: Routes = [
    ...clientRoutes, ...adminRoutes
];

