export class CompareHelper {
    public static compareString(value: string, compareTo: string): number {
        if (value < compareTo) {
            return -1;
        } else if (value > compareTo) {
            return 1;
        } else {
            return 0;
        }
    }
}