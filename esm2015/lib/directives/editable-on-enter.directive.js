import { Directive, HostListener } from '@angular/core';
import { EditableComponent } from '../editable/editable.component';
export class EditableOnEnterDirective {
    constructor(editable) {
        this.editable = editable;
    }
    onEnter() {
        this.editable.saveEdit();
    }
}
EditableOnEnterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[editableOnEnter]',
            },] }
];
EditableOnEnterDirective.ctorParameters = () => [
    { type: EditableComponent }
];
EditableOnEnterDirective.propDecorators = {
    onEnter: [{ type: HostListener, args: ['keyup.enter',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFibGUtb24tZW50ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWluLXBsYWNlLWVkaXQvc3JjL2xpYi9kaXJlY3RpdmVzL2VkaXRhYmxlLW9uLWVudGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUtuRSxNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLFlBQTZCLFFBQTJCO1FBQTNCLGFBQVEsR0FBUixRQUFRLENBQW1CO0lBQUcsQ0FBQztJQUc1RCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFURixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7O1lBSlEsaUJBQWlCOzs7c0JBUXZCLFlBQVksU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRWRpdGFibGVDb21wb25lbnQgfSBmcm9tICcuLi9lZGl0YWJsZS9lZGl0YWJsZS5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZWRpdGFibGVPbkVudGVyXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0YWJsZU9uRW50ZXJEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWRpdGFibGU6IEVkaXRhYmxlQ29tcG9uZW50KSB7fVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXl1cC5lbnRlcicpXHJcbiAgb25FbnRlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuZWRpdGFibGUuc2F2ZUVkaXQoKTtcclxuICB9XHJcbn1cclxuIl19