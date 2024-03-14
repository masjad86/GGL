import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'ggl-tab',
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: './tab.component.html',
    styleUrl: './tab.component.scss'
})
export class TabComponent {
    @Input() title: string = '';
    @Input() active: boolean = false;
    @Input() disabled: boolean = false; 
}
