import { NgModule } from '@angular/core';
import { EditableComponent } from './editable.component';
import { ViewModeDirective } from '../directives/view-mode.directive';
import { EditModeDirective } from '../directives/edit-mode.directive';
import { CommonModule } from '@angular/common';
import { EditableSaveDirective } from '../directives/editable-save.directive';
import { EditableCancelDirective } from '../directives/editable-cancel.directive';
import { EditableFocusDirective } from '../directives/editable-focus.directive';
import { EditableOnEnterDirective } from '../directives/editable-on-enter.directive';
import { EditableOnEscapeDirective } from '../directives/editable-on-escape.directive';
import { EditableGroupDirective } from '../directives/editable-group.directive';
import { EditableGroupCancelDirective } from '../directives/editable-group-cancel.directive';
import { EditableGroupSaveDirective } from '../directives/editable-group-save.directive';
import { EditableGroupEditDirective } from '../directives/editable-group-edit.directive';
import { EditableGroupActionDirective } from '../directives/editable-group-action.directive';
export class InlineEditModule {
}
InlineEditModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    EditableComponent,
                    ViewModeDirective,
                    EditModeDirective,
                    EditableSaveDirective,
                    EditableCancelDirective,
                    EditableFocusDirective,
                    EditableOnEnterDirective,
                    EditableOnEscapeDirective,
                    EditableGroupDirective,
                    EditableGroupCancelDirective,
                    EditableGroupSaveDirective,
                    EditableGroupEditDirective,
                    EditableGroupActionDirective,
                ],
                imports: [CommonModule],
                exports: [
                    EditableComponent,
                    ViewModeDirective,
                    EditModeDirective,
                    EditableSaveDirective,
                    EditableCancelDirective,
                    EditableFocusDirective,
                    EditableOnEnterDirective,
                    EditableOnEscapeDirective,
                    EditableGroupDirective,
                    EditableGroupEditDirective,
                    EditableGroupSaveDirective,
                    EditableGroupCancelDirective,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWluLXBsYWNlLWVkaXQvc3JjL2xpYi9lZGl0YWJsZS9lZGl0YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDckYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDN0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFrQzdGLE1BQU0sT0FBTyxnQkFBZ0I7OztZQWhDNUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUN0Qix3QkFBd0I7b0JBQ3hCLHlCQUF5QjtvQkFDekIsc0JBQXNCO29CQUN0Qiw0QkFBNEI7b0JBQzVCLDBCQUEwQjtvQkFDMUIsMEJBQTBCO29CQUMxQiw0QkFBNEI7aUJBQzdCO2dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsT0FBTyxFQUFFO29CQUNQLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2QixzQkFBc0I7b0JBQ3RCLHdCQUF3QjtvQkFDeEIseUJBQXlCO29CQUN6QixzQkFBc0I7b0JBQ3RCLDBCQUEwQjtvQkFDMUIsMEJBQTBCO29CQUMxQiw0QkFBNEI7aUJBQzdCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFZGl0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZWRpdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmlld01vZGVEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3ZpZXctbW9kZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBFZGl0TW9kZURpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZWRpdC1tb2RlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEVkaXRhYmxlU2F2ZURpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZWRpdGFibGUtc2F2ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBFZGl0YWJsZUNhbmNlbERpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZWRpdGFibGUtY2FuY2VsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEVkaXRhYmxlRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2VkaXRhYmxlLWZvY3VzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEVkaXRhYmxlT25FbnRlckRpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZWRpdGFibGUtb24tZW50ZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRWRpdGFibGVPbkVzY2FwZURpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZWRpdGFibGUtb24tZXNjYXBlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEVkaXRhYmxlR3JvdXBEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2VkaXRhYmxlLWdyb3VwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEVkaXRhYmxlR3JvdXBDYW5jZWxEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2VkaXRhYmxlLWdyb3VwLWNhbmNlbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBFZGl0YWJsZUdyb3VwU2F2ZURpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZWRpdGFibGUtZ3JvdXAtc2F2ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBFZGl0YWJsZUdyb3VwRWRpdERpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZWRpdGFibGUtZ3JvdXAtZWRpdC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBFZGl0YWJsZUdyb3VwQWN0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9lZGl0YWJsZS1ncm91cC1hY3Rpb24uZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBFZGl0YWJsZUNvbXBvbmVudCxcclxuICAgIFZpZXdNb2RlRGlyZWN0aXZlLFxyXG4gICAgRWRpdE1vZGVEaXJlY3RpdmUsXHJcbiAgICBFZGl0YWJsZVNhdmVEaXJlY3RpdmUsXHJcbiAgICBFZGl0YWJsZUNhbmNlbERpcmVjdGl2ZSxcclxuICAgIEVkaXRhYmxlRm9jdXNEaXJlY3RpdmUsXHJcbiAgICBFZGl0YWJsZU9uRW50ZXJEaXJlY3RpdmUsXHJcbiAgICBFZGl0YWJsZU9uRXNjYXBlRGlyZWN0aXZlLFxyXG4gICAgRWRpdGFibGVHcm91cERpcmVjdGl2ZSxcclxuICAgIEVkaXRhYmxlR3JvdXBDYW5jZWxEaXJlY3RpdmUsXHJcbiAgICBFZGl0YWJsZUdyb3VwU2F2ZURpcmVjdGl2ZSxcclxuICAgIEVkaXRhYmxlR3JvdXBFZGl0RGlyZWN0aXZlLFxyXG4gICAgRWRpdGFibGVHcm91cEFjdGlvbkRpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEVkaXRhYmxlQ29tcG9uZW50LFxyXG4gICAgVmlld01vZGVEaXJlY3RpdmUsXHJcbiAgICBFZGl0TW9kZURpcmVjdGl2ZSxcclxuICAgIEVkaXRhYmxlU2F2ZURpcmVjdGl2ZSxcclxuICAgIEVkaXRhYmxlQ2FuY2VsRGlyZWN0aXZlLFxyXG4gICAgRWRpdGFibGVGb2N1c0RpcmVjdGl2ZSxcclxuICAgIEVkaXRhYmxlT25FbnRlckRpcmVjdGl2ZSxcclxuICAgIEVkaXRhYmxlT25Fc2NhcGVEaXJlY3RpdmUsXHJcbiAgICBFZGl0YWJsZUdyb3VwRGlyZWN0aXZlLFxyXG4gICAgRWRpdGFibGVHcm91cEVkaXREaXJlY3RpdmUsXHJcbiAgICBFZGl0YWJsZUdyb3VwU2F2ZURpcmVjdGl2ZSxcclxuICAgIEVkaXRhYmxlR3JvdXBDYW5jZWxEaXJlY3RpdmUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIElubGluZUVkaXRNb2R1bGUge31cclxuIl19