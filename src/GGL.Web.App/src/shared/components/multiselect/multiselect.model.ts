import { IconSize } from "../../enums";
import { SelectItem } from "../../models";

export interface MultiSelectItem extends SelectItem {
    icon?: string;
    iconSize?: IconSize;
}