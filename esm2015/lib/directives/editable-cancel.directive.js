import { Directive, ElementRef, Input } from '@angular/core';
import { EditableComponent } from '../editable/editable.component';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class EditableCancelDirective {
    constructor(editable, el) {
        this.editable = editable;
        this.el = el;
        this.cancelEvent = 'click';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        fromEvent(this.el.nativeElement, this.cancelEvent)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.editable.cancelEdit());
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
EditableCancelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[editableOnCancel]',
            },] }
];
EditableCancelDirective.ctorParameters = () => [
    { type: EditableComponent },
    { type: ElementRef }
];
EditableCancelDirective.propDecorators = {
    cancelEvent: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFibGUtY2FuY2VsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbi1wbGFjZS1lZGl0L3NyYy9saWIvZGlyZWN0aXZlcy9lZGl0YWJsZS1jYW5jZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzNDLE1BQU0sT0FBTyx1QkFBdUI7SUFJbEMsWUFBNkIsUUFBMkIsRUFBVSxFQUFjO1FBQW5ELGFBQVEsR0FBUixRQUFRLENBQW1CO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUh2RSxnQkFBVyxHQUFHLE9BQU8sQ0FBQztRQUN2QixhQUFRLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7SUFFdUIsQ0FBQztJQUVwRixRQUFRO1FBQ04sU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7O1lBTlEsaUJBQWlCO1lBRE4sVUFBVTs7OzBCQVMzQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRWRpdGFibGVDb21wb25lbnQgfSBmcm9tICcuLi9lZGl0YWJsZS9lZGl0YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZWRpdGFibGVPbkNhbmNlbF0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdGFibGVDYW5jZWxEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgY2FuY2VsRXZlbnQgPSAnY2xpY2snO1xyXG4gIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVkaXRhYmxlOiBFZGl0YWJsZUNvbXBvbmVudCwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBmcm9tRXZlbnQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNhbmNlbEV2ZW50KVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5lZGl0YWJsZS5jYW5jZWxFZGl0KCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==