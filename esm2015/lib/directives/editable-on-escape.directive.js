import { Directive, HostListener } from '@angular/core';
import { EditableComponent } from '../editable/editable.component';
export class EditableOnEscapeDirective {
    constructor(editable) {
        this.editable = editable;
    }
    onEnter() {
        this.editable.cancelEdit();
    }
}
EditableOnEscapeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[editableOnEscape]',
            },] }
];
EditableOnEscapeDirective.ctorParameters = () => [
    { type: EditableComponent }
];
EditableOnEscapeDirective.propDecorators = {
    onEnter: [{ type: HostListener, args: ['keyup.escape',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFibGUtb24tZXNjYXBlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbi1wbGFjZS1lZGl0L3NyYy9saWIvZGlyZWN0aXZlcy9lZGl0YWJsZS1vbi1lc2NhcGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBS25FLE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsWUFBNkIsUUFBMkI7UUFBM0IsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7SUFBRyxDQUFDO0lBRzVELE9BQU87UUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7OztZQVRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7WUFKUSxpQkFBaUI7OztzQkFRdkIsWUFBWSxTQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFZGl0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2VkaXRhYmxlL2VkaXRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tlZGl0YWJsZU9uRXNjYXBlXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0YWJsZU9uRXNjYXBlRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVkaXRhYmxlOiBFZGl0YWJsZUNvbXBvbmVudCkge31cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAuZXNjYXBlJylcclxuICBvbkVudGVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lZGl0YWJsZS5jYW5jZWxFZGl0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==