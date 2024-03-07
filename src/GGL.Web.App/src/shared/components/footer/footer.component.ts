import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { AppViewMode, GGL_TITLE, MenuIconSize } from '../..';
import { SocialMedia } from '../../models/social-media';

@Component({
    selector: 'ggl-footer',
    standalone: true,
    imports: [
        NgFor,
        NgIf
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    @Input() isAdminView: boolean = false;
    appTitle: string = GGL_TITLE;
    appCopyright: number = 2017;
    
    appSocialMediaLinks: Array<SocialMedia> = [
        { id: '1', name: 'twitter', url: 'https://twitter.com/greengardenlawn', icon: { name: 'icon-twitter2', size: MenuIconSize.XSMALL}, title: 'Twitter' },
        { id: '2', name: 'facebook', url: 'https://www.facebook.com/greengardenlawn', icon: { name: 'icon-facebook2', size: MenuIconSize.XSMALL }, title: 'Facebook' },
        { id: '3', name: 'instagram', url: '#', icon: { name: 'icon-instagram', size: MenuIconSize.XSMALL }, title: 'Instagram' },
        { id: '4', name: 'whatsapp', url: '#', icon: { name: 'icon-whatsapp', size: MenuIconSize.XSMALL }, title: 'Whatsapp' },
        { id: '5', name: 'youtube', url: '#', icon: { name: 'icon-youtube', size: MenuIconSize.XSMALL }, title: 'Youtube' }
    ]
}
