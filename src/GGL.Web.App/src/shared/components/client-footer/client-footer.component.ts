import { Component, OnInit } from '@angular/core';
import { SliderItem } from '../slider/slider.model';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
    selector: 'ggl-client-footer',
    standalone: true,
    templateUrl: './client-footer.component.html',
    styleUrls: ['./client-footer.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientFooterComponent implements OnInit {
    public year: number = new Date().getFullYear();
    public sliderItems: Array<SliderItem<number>> = [];

    constructor() { }

    ngOnInit(): void {
    }

}
