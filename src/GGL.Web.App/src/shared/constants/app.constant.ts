import { MenuIconSize } from "../enums";
import { Menu } from "../models";
import { ADMIN_URL } from "./url.constant";

export const TOKEN_SESSION_KEY_NAME = "ggl-token";
export const GGL_TITLE: string = 'Green Garden Lawn';
export const EXPAND_TITLE = 'Expand';
export const COLLAPSE_TITLE = 'Collapse';

export const GGL_MENU_ITEMS: Array<Menu> = [
    { id: 'home', name: 'Home', title: 'Home', url: '', active: true },
    { id: 'gallery', name: 'Gallery', title: 'Gallery', url: 'gallery' },
    { id: 'services', name: 'Services', title: 'Services', url: 'services' },
    { id: 'booknow', name: 'Book Now', title: 'Book Now', url: 'booknow' },
    { id: 'about', name: 'About Us', title: 'About Us', url: 'about' },
    { id: 'contact', name: 'Contact Us', title: 'Contact Us', url: 'contact' }
];

export const GGL_ADMINMENU_ITEMS: Array<Menu> = [
    { id: 'home', name: 'Home', title: 'Home', url: ADMIN_URL.DASHBOARD, icon: { name: 'dashboard', size: MenuIconSize.LARGE } },
    { id: 'booking', name: 'Bookings', title: 'Bookings', url: ADMIN_URL.BOOKINGS, icon: { name: 'post_add', size: MenuIconSize.DEFAULT } },
    { id: 'booking', name: 'Users', title: 'Users', url: ADMIN_URL.USERS, icon: { name: 'person', size: MenuIconSize.DEFAULT } },
    { id: 'signout', name: 'Log Off', title: 'Log Off', url: ADMIN_URL.LOGOUT, icon: { name: 'logout', size: MenuIconSize.LARGE }, cssStyle: 'special-menu log-out-nav' }
];