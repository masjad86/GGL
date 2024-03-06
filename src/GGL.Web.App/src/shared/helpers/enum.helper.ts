import { IEnumDescription } from "../models/enum-description.model";

export class EnumHelper {
    public static GetDesciption(value: number, type: IEnumDescription) {
        return type[value];
    }
}