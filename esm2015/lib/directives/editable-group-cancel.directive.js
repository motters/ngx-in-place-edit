import { Directive, HostListener } from '@angular/core';
import { EditableGroupActionDirective } from './editable-group-action.directive';
export class EditableGroupCancelDirective extends EditableGroupActionDirective {
    onClick() {
        this.group.cancelEdit();
    }
}
EditableGroupCancelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[editableGroupCancel]',
            },] }
];
EditableGroupCancelDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFibGUtZ3JvdXAtY2FuY2VsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbi1wbGFjZS1lZGl0L3NyYy9saWIvZGlyZWN0aXZlcy9lZGl0YWJsZS1ncm91cC1jYW5jZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBS2pGLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSw0QkFBNEI7SUFFNUUsT0FBTztRQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBUEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7YUFDbEM7OztzQkFFRSxZQUFZLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVkaXRhYmxlR3JvdXBBY3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuL2VkaXRhYmxlLWdyb3VwLWFjdGlvbi5kaXJlY3RpdmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZWRpdGFibGVHcm91cENhbmNlbF0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdGFibGVHcm91cENhbmNlbERpcmVjdGl2ZSBleHRlbmRzIEVkaXRhYmxlR3JvdXBBY3Rpb25EaXJlY3RpdmUge1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5ncm91cC5jYW5jZWxFZGl0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==