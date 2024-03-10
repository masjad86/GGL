import { IconSize } from "../enums";
import { IconTypes } from "../enums/icon-type.enum";
import { Menu } from "../models";
import { ADMIN_URL } from "./url.constant";

export const TOKEN_SESSION_KEY_NAME = "ggl-token";
export const GGL_TITLE: string = 'Green Garden Lawn';
export const EXPAND_TITLE = 'Expand';
export const COLLAPSE_TITLE = 'Collapse';
export const ADD_NEW = 'Add New';
export const DELETE = 'Delete';


export const GGL_MENU_ITEMS: Array<Menu> = [
    { id: 'home', name: 'Home', title: 'Home', url: '', active: true },
    { id: 'gallery', name: 'Gallery', title: 'Gallery', url: 'gallery' },
    { id: 'services', name: 'Services', title: 'Services', url: 'services' },
    { id: 'booknow', name: 'Book Now', title: 'Book Now', url: 'booknow' },
    { id: 'about', name: 'About Us', title: 'About Us', url: 'about' },
    { id: 'contact', name: 'Contact Us', title: 'Contact Us', url: 'contact' }
];

export const GGL_ADMINMENU_ITEMS: Array<Menu> = [
    { id: 'home', name: 'Dashboard', title: 'Dashboard', url: ADMIN_URL.DASHBOARD, icon: { name: IconTypes.DASHBOARD, size: IconSize.DEFAULT } },
    {
        id: 'booking', name: 'Bookings', title: 'Bookings', url: ADMIN_URL.BOOKINGS, icon: { name: IconTypes.BOOKING, size: IconSize.DEFAULT },
        childrens: [
            {
                id: 'find-booking', name: 'Find Booking', title: 'Find Booking', url: ADMIN_URL.BOOKINGS, icon: { name: IconTypes.SEARCH, size: IconSize.DEFAULT },
            }
        ]
    },
    { id: 'services', name: 'Services', title: 'Services', url: ADMIN_URL.SERVICES, icon: { name: IconTypes.SETTINGS, size: IconSize.DEFAULT } },
    { id: 'services', name: 'Events', title: 'Events', url: ADMIN_URL.EVENTS, icon: { name: IconTypes.EVENT, size: IconSize.DEFAULT } },
    { id: 'users', name: 'Users', title: 'Users', url: ADMIN_URL.USERS, icon: { name: IconTypes.USER, size: IconSize.DEFAULT } },
    { id: 'components', name: 'Components', title: 'Components', url: ADMIN_URL.TESTPAGE, icon: { name: IconTypes.TUNE, size: IconSize.DEFAULT } },
    { id: 'signout', name: 'Log Off', title: 'Log Off', url: ADMIN_URL.LOGOUT, icon: { name: IconTypes.LOGOUT, size: IconSize.DEFAULT }, cssStyle: 'special-menu log-out-nav' }
];