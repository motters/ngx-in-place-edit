import { Directive } from '@angular/core';
import { EditableGroupDirective } from './editable-group.directive';
export class EditableGroupActionDirective {
    constructor(group) {
        this.group = group;
    }
}
EditableGroupActionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[]',
            },] }
];
EditableGroupActionDirective.ctorParameters = () => [
    { type: EditableGroupDirective }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFibGUtZ3JvdXAtYWN0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbi1wbGFjZS1lZGl0L3NyYy9saWIvZGlyZWN0aXZlcy9lZGl0YWJsZS1ncm91cC1hY3Rpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFLcEUsTUFBTSxPQUFPLDRCQUE0QjtJQUN2QyxZQUErQixLQUE2QjtRQUE3QixVQUFLLEdBQUwsS0FBSyxDQUF3QjtJQUFHLENBQUM7OztZQUpqRSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLElBQUk7YUFDZjs7O1lBSlEsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVkaXRhYmxlR3JvdXBEaXJlY3RpdmUgfSBmcm9tICcuL2VkaXRhYmxlLWdyb3VwLmRpcmVjdGl2ZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRhYmxlR3JvdXBBY3Rpb25EaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSBncm91cDogRWRpdGFibGVHcm91cERpcmVjdGl2ZSkge31cclxufVxyXG4iXX0=