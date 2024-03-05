import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { GalleryComponent } from './client/gallery/gallery.component';
import { BookNowComponent } from './client/book-now/book-now.component';
import { HomeComponent } from './client/home/home.component';

const adminRoutes: Routes = [
    { path: 'admin', component: LoginComponent }
];

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin', component: LoginComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'booknow', component: BookNowComponent }
];

routes.concat(adminRoutes);

