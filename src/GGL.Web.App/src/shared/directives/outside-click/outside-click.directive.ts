import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
	selector: '[gglClickOutside]'
})
export class OutsideClickDirective {
	@Output() afterClosed: EventEmitter<boolean> = new EventEmitter();
	constructor(private elementRef: ElementRef) { }
	@HostListener('document:click', ['$event.target'])
	public documentClick(targetElement: Element) {
		const isClickInside = this.elementRef.nativeElement.contains(targetElement);
		if (!isClickInside) {
			this.elementRef.nativeElement.class = 'hide';

			if (this.afterClosed) {
				this.afterClosed.emit(true);
			}
		}
	}
}
