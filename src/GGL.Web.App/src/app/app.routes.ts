import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { GalleryComponent } from './client/gallery/gallery.component';
import { BookNowComponent } from './client/book-now/book-now.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard';
import { BookingComponent } from './admin/booking/booking.component';

const adminRoutes: Routes = [
    { path: 'admin/login', component: LoginComponent },
    { path: 'admin', component: DashboardComponent },
    { path: 'admin/dashboard', component: DashboardComponent },
    { path: 'admin/booking', component: BookingComponent },
];

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin', component: LoginComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'booknow', component: BookNowComponent }
];

routes.concat(adminRoutes);

