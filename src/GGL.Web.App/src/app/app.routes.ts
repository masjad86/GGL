import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { GalleryComponent } from './client/gallery/gallery.component';

const adminRoutes: Routes = [
    { path: 'admin', component: LoginComponent }
];

export const routes: Routes = [
    { path: 'admin', component: LoginComponent },
    { path: 'gallery', component: GalleryComponent }
];

routes.concat(adminRoutes);

