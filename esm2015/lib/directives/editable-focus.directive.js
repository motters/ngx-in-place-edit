import { Directive, ElementRef } from '@angular/core';
export class EditableFocusDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        this.el.nativeElement.focus();
    }
}
EditableFocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[editableFocusable]',
            },] }
];
EditableFocusDirective.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFibGUtZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWluLXBsYWNlLWVkaXQvc3JjL2xpYi9kaXJlY3RpdmVzL2VkaXRhYmxlLWZvY3VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUs5RCxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLFlBQTZCLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQztJQUUvQyxRQUFRO1FBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7O1lBUkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7YUFDaEM7OztZQUptQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2VkaXRhYmxlRm9jdXNhYmxlXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0YWJsZUZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxufVxyXG4iXX0=