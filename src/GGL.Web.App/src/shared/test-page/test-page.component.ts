import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GlobalHeaderService } from '../services';
import {
    ButtonComponent, CheckboxComponent, GridHeader, GridRow,
    IconComponent, InputComponent,
    LabelComponent, GridComponent,
    ModalComponent, RadioComponent,
    SwitchComponent
} from '../components';
import { MatInputModule } from '@angular/material/input';
import { KEY_CODE_ENTER } from '../../constants/app.constants';
import { IconSize } from '../enums';
import { } from '../components';

@Component({
    selector: 'ggl-test-page',
    standalone: true,
    imports: [
        ButtonComponent,
        CheckboxComponent,
        IconComponent,
        InputComponent,
        LabelComponent,
        GridComponent,
        ModalComponent,
        RadioComponent,
        SwitchComponent,
        MatInputModule
    ],
    templateUrl: './test-page.component.html',
    styleUrl: './test-page.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestPageComponent implements OnInit {
    showIcon: boolean = true;
    iconSize_18: IconSize = IconSize.XXSMALL;
    iconSize_24: IconSize = IconSize.XSMALL;
    iconSize_30: IconSize = IconSize.SMALL;
    iconSize_36: IconSize = IconSize.MEDIUM;
    iconSize_48: IconSize = IconSize.LARGE;
    iconSize_60: IconSize = IconSize.XLARGE;
    iconSize_72: IconSize = IconSize.XXLARGE;
    enableSearch: boolean = true;
    inputValue: string = '';
    buttonLabel: string = '';

    isChecked: boolean = true;
    isDisabled: boolean = true;

    //checkbox
    isCheckedOption: boolean = true;

    //label
    isClickable: boolean = true;
    labelClicked: string = '';

    //grid
    showDelete: boolean = true;
    showAddNew: boolean = true;
    gridRows: Array<GridRow> = [
        {
            columns: [
                { id: 'name', name: 'Name', title: 'Name', value: 'Label' },
                { id: 'description', name: 'Description', title: 'Description', value: 'Label Description' },
                { id: 'type', name: 'Control', title: 'Control', value: 'Control' }
            ]
        },
        {
            columns: [
                { id: 'name', name: 'Name', title: 'TextBox', value: 'TextBox' },
                { id: 'description', name: 'Description', title: 'TextBox', value: 'TextBox' },
                { id: 'type', name: 'Control', title: 'Control', value: 'Input' }
            ]
        },
        {
            columns: [
                { id: 'name', name: 'Name', title: 'Select', value: 'Select' },
                { id: 'description', name: 'Description', title: 'Select', value: 'Select' },
                { id: 'type', name: 'Control', title: 'Control', value: 'Select' }
            ]
        }
    ];
    gridHeaders: Array<GridHeader> = [
        { id: 'name', name: 'Name', title: 'Name' },
        { id: 'description', name: 'Description', title: 'Description' },
        { id: 'type', name: 'Control', title: 'Control' }
    ];

    //modal
    isShowModal: boolean = false;
    showModalFooter: boolean = true;
    showModalCloseButton: boolean = true;
    modalHeight: number = 200;
    modalWidth: number = 300;
    clickedModalButton: string = '';

    //radio
    showLabel: boolean = true;
    isSelected: boolean = true;

    //switch 
    switchSelected: boolean = true;

    constructor(private globalHeader: GlobalHeaderService,
        private cdr: ChangeDetectorRef) {

    }

    ngOnInit(): void {
        this.globalHeader.title = "Components";
    }

    handleInputChange($event: any) {
        this.inputValue = $event.target.value;
    }

    handleKeyPress($event: any) {
        if ($event.keyCode === KEY_CODE_ENTER) {
            this.inputValue = $event.target.value;
        }
    }

    handleCheckboxChange($event: boolean) {
        this.isCheckedOption = $event;
    }

    handleRadioChange($event: any) {
        this.isChecked = $event.selected || false;
    }

    handleButtonClicked($event: ButtonComponent) {
        this.buttonLabel = $event.label;
    }

    handleLinkClick($event: string) {
        this.labelClicked = $event;
    }

    handleShowModal(type: string) {
        if (type === "big") {
            this.modalWidth = 700;
            this.modalHeight = 300;
        } else {
            this.modalWidth = 300;
            this.modalHeight = 200;
        }

        this.openModal(true);
    }

    handleCustomModal() {
        this.showModalCloseButton = false;
        this.handleShowModal('');
    }

    handleSaveClick() {
        this.clickedModalButton = "Save";
        this.openModal(false);
    }

    handleCloseModal(isClosed: boolean) {
        this.clickedModalButton = "Cancel";
        this.openModal(isClosed);
    }

    handleSwitchToggle(value: boolean) {
        this.switchSelected = value;
    }

    private openModal(isShow: boolean) {
        this.isShowModal = isShow;
    }
}
