import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './client/footer/footer.component';
import { CountdownTimerComponent } from './client/countdown-timer/countdown-timer.component';
import { GettingStartedComponent } from './client/getting-started/getting-started.component';
import { HeaderComponent } from './client/header/header.component';
//import { BlinkDirective } from '../directives/blink.directive';
//import { BlinkItemType } from '../enums/blink-item-type';
import { BannerComponent } from './client/banner/banner.component';
import { GGL_TITLE } from '../shared';

@Component({
    selector: 'ggl-root',
    standalone: true,
    imports: [
        // BlinkDirective,
        CommonModule, 
        RouterOutlet,

        BannerComponent,
        HeaderComponent,
        FooterComponent,
        CountdownTimerComponent,
        GettingStartedComponent,
        NgIf
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
    title: string = GGL_TITLE;
    nextEventDate?: Date = undefined;
    hideCountdownTimerSection: boolean = false;
    //blinkItemType = BlinkItemType.IMAGE;
    blinkImageUrls: Array<string> = [
        '../assets/images/svg/Black-Logo-No-Bg.svg',
        '../assets/images/svg/White-Logo-No-Bg.svg',
        '../assets/images/svg/Color-Logo-No-Bg.svg'
    ]
    
    constructor() { }

    hideTimer(isHide: boolean) {
        this.hideCountdownTimerSection = isHide;
    }

}
