import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'ggl-banner',
    standalone: true,
    imports: [
        NgIf
    ],
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss', '../../../assets/css/rain.scss']
})
export class BannerComponent {
    @Input() title: string = '';
    @Input('nextEvent') upcomingEventDate?: Date = undefined;
}
