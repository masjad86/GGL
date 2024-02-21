import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { GGL_TITLE, MenuIconSize } from '../../../shared';
import { SocialMedia } from '../../../shared/models/social-media';

@Component({
    selector: 'ggl-footer',
    standalone: true,
    imports: [NgFor],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
