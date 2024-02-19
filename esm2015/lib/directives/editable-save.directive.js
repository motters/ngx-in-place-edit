import { Directive, ElementRef, Input } from '@angular/core';
import { EditableComponent } from '../editable/editable.component';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class EditableSaveDirective {
    constructor(editable, el) {
        this.editable = editable;
        this.el = el;
        this.saveEvent = 'click';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        fromEvent(this.el.nativeElement, this.saveEvent)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.editable.saveEdit());
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
}
EditableSaveDirective.decorators = [
    { type: Directive, args: [{
                selector: '[editableOnSave]',
            },] }
];
EditableSaveDirective.ctorParameters = () => [
    { type: EditableComponent },
    { type: ElementRef }
];
EditableSaveDirective.propDecorators = {
    saveEvent: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFibGUtc2F2ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtaW4tcGxhY2UtZWRpdC9zcmMvbGliL2RpcmVjdGl2ZXMvZWRpdGFibGUtc2F2ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLM0MsTUFBTSxPQUFPLHFCQUFxQjtJQUloQyxZQUE2QixRQUEyQixFQUFtQixFQUFjO1FBQTVELGFBQVEsR0FBUixRQUFRLENBQW1CO1FBQW1CLE9BQUUsR0FBRixFQUFFLENBQVk7UUFIaEYsY0FBUyxHQUFHLE9BQU8sQ0FBQztRQUNyQixhQUFRLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7SUFFZ0MsQ0FBQztJQUU3RixRQUFRO1FBQ04sU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7O1lBTlEsaUJBQWlCO1lBRE4sVUFBVTs7O3dCQVMzQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRWRpdGFibGVDb21wb25lbnQgfSBmcm9tICcuLi9lZGl0YWJsZS9lZGl0YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZWRpdGFibGVPblNhdmVdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRhYmxlU2F2ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBzYXZlRXZlbnQgPSAnY2xpY2snO1xyXG4gIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVkaXRhYmxlOiBFZGl0YWJsZUNvbXBvbmVudCwgcHJpdmF0ZSByZWFkb25seSBlbDogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBmcm9tRXZlbnQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLnNhdmVFdmVudClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZWRpdGFibGUuc2F2ZUVkaXQoKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICB9XHJcbn1cclxuIl19