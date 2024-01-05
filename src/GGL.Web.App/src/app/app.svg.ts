import { APP_FOLDERS } from './app.constant';

export const SVG_ICONS = [
	{ name: 'twitter', url: `${APP_FOLDERS.ICONS_SVG_FOLDER_PATH}twitter.svg` },
	{ name: 'facebook', url: `${APP_FOLDERS.ICONS_SVG_FOLDER_PATH}facebook.svg` },
	{ name: 'whatsapp', url: `${APP_FOLDERS.ICONS_SVG_FOLDER_PATH}whatsapp.svg` },
	{ name: 'google-plus', url: `${APP_FOLDERS.ICONS_SVG_FOLDER_PATH}google-plus.svg` },
	{ name: 'youtube', url: `${APP_FOLDERS.ICONS_SVG_FOLDER_PATH}youtube.svg` }
];

export class SvgIcon {
	name: string;
	url: string;
}
