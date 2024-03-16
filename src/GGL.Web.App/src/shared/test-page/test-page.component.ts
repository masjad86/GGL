import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GlobalHeaderService } from '../services';
import {
    ButtonComponent, CheckboxComponent,
    IconComponent, InputComponent,
    LabelComponent, ListComponent, ModalComponent,
    MultiselectComponent, RadioComponent,
    SelectComponent, SwitchComponent,
    TabsComponent, TabComponent,
    TableComponent
} from '../components';
import { KEY_CODE_ENTER } from '../../constants/app.constants';
import { IconSize } from '../enums';
import { SelectItem } from '../models';
import { MultiSelectItem } from '../components/multiselect/multiselect.model';
import { IconTypes } from '../enums/icon-type.enum';
import { NgFor, NgIf } from '@angular/common';
import { TableHeader, TableRow } from '../components/table';

@Component({
    selector: 'ggl-components',
    standalone: true,
    imports: [
        NgIf,

        ButtonComponent,
        CheckboxComponent,
        IconComponent,
        InputComponent,
        LabelComponent,
        ListComponent,
        ModalComponent,
        MultiselectComponent,
        RadioComponent,
        SelectComponent,
        SwitchComponent,
        TabsComponent,
        TabComponent,
        TableComponent,

        NgFor
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

    //list
    listItems: Array<SelectItem> = [];
    enableAction: boolean = true;
    showListIcon: boolean = true;
    selectedListItem?: SelectItem;

    //table
    showDelete: boolean = true;
    showAddNew: boolean = true;
    selectable: boolean = true;
    tableRows: Array<TableRow> = [];
    tableHeaders: Array<TableHeader> = [
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

    //multiselect
    isDisableMultiselect: boolean = false;
    multiselectOptions: Array<MultiSelectItem> = [];
    selectedMultiselectOptions: Array<MultiSelectItem> = [];

    //radio
    showLabel: boolean = true;
    isSelected: boolean = true;

    //switch 
    switchSelected: boolean = true;

    //select
    options: Array<SelectItem> = [];

    showBlankOption: boolean = true;
    selectedValue: string = '';
    selectedText: string = '';
    selectedOption: string = '';

    //tabs
    isTabActive: boolean = true;
    selectedTabTitle: string = 'Tab 1';
    isTabDisabled: boolean = false;

    constructor(private globalHeader: GlobalHeaderService,
        private cdr: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.globalHeader.title = "Components";
        this.loadData();
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

    handleListItemClick($event: SelectItem) {
        this.selectedListItem = $event;
    }

    hideListDefaultButtons($event: boolean) {
        this.enableAction = $event;
    }

    handleListAcceptClick() {

    }

    handleListRejectClick() {

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

    handleSelectChange() {
        this.selectedOption = "You have choosen";
        this.selectedText = this.options.find(o => o.value === this.selectedValue)?.text || '';
    }

    handleSwitchToggle(value: boolean) {
        this.switchSelected = value;
    }

    handleTabChange(tab: TabComponent) {
        this.selectedTabTitle = tab.title;
    }

    disableTabs(value: boolean) {
        this.isTabDisabled = value;
        this.cdr.detectChanges();
    }

    disableMultiselect(value: boolean) {
        this.isDisableMultiselect = value;
        this.cdr.detectChanges();
    }

    private openModal(isShow: boolean) {
        this.isShowModal = isShow;
    }

    private loadData() {
        for (let index = 1; index <= 10; index++) {
            const option: SelectItem = {
                text: 'User ' + index.toString(),
                selected: false,
                value: index.toString()
            };

            this.options.push(option);
            this.listItems.push({
                ...option,
                text: 'GGL00000000000' + index.toString()
            });
            this.multiselectOptions.push({
                ...option,
                icon: IconTypes.USER,
                iconSize: IconSize.XXSMALL
            });


            if (index % 3 === 0 || index % 5 === 0) {
                this.selectedMultiselectOptions.push({
                    ...option,
                    icon: IconTypes.USER,
                    iconSize: IconSize.XXSMALL
                })
            }
        }

        for (let index = 1; index < 100; index++) {
            this.tableRows.push(
                {
                    columns: [
                        { id: 'name', name: 'Name', title: 'Name', value: 'Label' },
                        { id: 'description', name: 'Description ', title: 'Description', value: 'Label Description' },
                        { id: 'type', name: 'Control', title: 'Control', value: 'Control' }
                    ]
                },
            );

        }
    }
}
