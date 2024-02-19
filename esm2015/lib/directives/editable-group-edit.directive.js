import { Directive, HostListener } from '@angular/core';
import { EditableGroupActionDirective } from './editable-group-action.directive';
export class EditableGroupEditDirective extends EditableGroupActionDirective {
    onClick() {
        this.group.displayEditMode();
    }
}
EditableGroupEditDirective.decorators = [
    { type: Directive, args: [{
                selector: '[editableGroupEdit]',
            },] }
];
EditableGroupEditDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFibGUtZ3JvdXAtZWRpdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtaW4tcGxhY2UtZWRpdC9zcmMvbGliL2RpcmVjdGl2ZXMvZWRpdGFibGUtZ3JvdXAtZWRpdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFLakYsTUFBTSxPQUFPLDBCQUEyQixTQUFRLDRCQUE0QjtJQUUxRSxPQUFPO1FBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7WUFQRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjthQUNoQzs7O3NCQUVFLFlBQVksU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRWRpdGFibGVHcm91cEFjdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZWRpdGFibGUtZ3JvdXAtYWN0aW9uLmRpcmVjdGl2ZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tlZGl0YWJsZUdyb3VwRWRpdF0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdGFibGVHcm91cEVkaXREaXJlY3RpdmUgZXh0ZW5kcyBFZGl0YWJsZUdyb3VwQWN0aW9uRGlyZWN0aXZlIHtcclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgb25DbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZ3JvdXAuZGlzcGxheUVkaXRNb2RlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==