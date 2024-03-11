import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { IconSize } from '../../enums';
import { IconTypes } from '../../enums/icon-type.enum';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'ggl-modal',
    standalone: true,
    imports: [
        NgIf,

        ButtonComponent,
        IconComponent
    ],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss'
})
export class ModalComponent {
    @Input('title') modalTitle: string = '';
    @Input('height') modalHeight: number = 200;
    @Input('width') modalWidth: number = 300;
    @Input('show') showModal: boolean = false;
    @Input('showFooter') showFooter: boolean = true;
    @Input('showClose') showCloseButton: boolean = false;
    @Output('closed') modalCloseClick: EventEmitter<any> = new EventEmitter();

    closeIcon: string = IconTypes.CLOSE;
    closeIconSize: IconSize = IconSize.XSMALL;

    handleClose() {
        if (this.modalCloseClick) {
            this.modalCloseClick.emit(false);
        }
    }
}
