import { ContentChildren, Directive, EventEmitter, Output } from '@angular/core';
import { EditableComponent } from '../editable/editable.component';
export class EditableGroupDirective {
    constructor() {
        this.save = new EventEmitter();
        this.cancel = new EventEmitter();
        this.editableModeChange = new EventEmitter();
    }
    ngAfterViewInit() {
        this.children.forEach((child) => (child.isGrouped = true));
        this.children.forEach((child) => child.viewHandler.unsubscribe());
        this.children.forEach((child) => child.editHandler.unsubscribe());
    }
    displayEditMode() {
        this.editableModeChange.emit('edit');
        this.children.forEach((child) => child.displayEditMode());
    }
    saveEdit() {
        this.editableModeChange.emit('view');
        this.children.forEach((child) => child.saveEdit());
        this.save.emit();
    }
    cancelEdit() {
        this.editableModeChange.emit('view');
        this.children.forEach((child) => child.cancelEdit());
        this.cancel.emit();
    }
}
EditableGroupDirective.decorators = [
    { type: Directive, args: [{
                selector: '[editableGroup]',
            },] }
];
EditableGroupDirective.propDecorators = {
    children: [{ type: ContentChildren, args: [EditableComponent, { descendants: true },] }],
    save: [{ type: Output }],
    cancel: [{ type: Output }],
    editableModeChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFibGUtZ3JvdXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWluLXBsYWNlLWVkaXQvc3JjL2xpYi9kaXJlY3RpdmVzL2VkaXRhYmxlLWdyb3VwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLGVBQWUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU1uRSxNQUFNLE9BQU8sc0JBQXNCO0lBSG5DO1FBTVksU0FBSSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3BELFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0RCx1QkFBa0IsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQXdCOUUsQ0FBQztJQXRCQyxlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7dUJBRUUsZUFBZSxTQUFDLGlCQUFpQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTttQkFFeEQsTUFBTTtxQkFDTixNQUFNO2lDQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb250ZW50Q2hpbGRyZW4sIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFZGl0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2VkaXRhYmxlL2VkaXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGUgfSBmcm9tICcuLi9lZGl0YWJsZS9tb2RlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2VkaXRhYmxlR3JvdXBdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRhYmxlR3JvdXBEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKEVkaXRhYmxlQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGNoaWxkcmVuOiBRdWVyeUxpc3Q8RWRpdGFibGVDb21wb25lbnQ+O1xyXG5cclxuICBAT3V0cHV0KCkgc2F2ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBjYW5jZWw6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgZWRpdGFibGVNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TW9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGU+KCk7XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IChjaGlsZC5pc0dyb3VwZWQgPSB0cnVlKSk7XHJcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC52aWV3SGFuZGxlci51bnN1YnNjcmliZSgpKTtcclxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLmVkaXRIYW5kbGVyLnVuc3Vic2NyaWJlKCkpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheUVkaXRNb2RlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lZGl0YWJsZU1vZGVDaGFuZ2UuZW1pdCgnZWRpdCcpO1xyXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQuZGlzcGxheUVkaXRNb2RlKCkpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUVkaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVkaXRhYmxlTW9kZUNoYW5nZS5lbWl0KCd2aWV3Jyk7XHJcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5zYXZlRWRpdCgpKTtcclxuICAgIHRoaXMuc2F2ZS5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBjYW5jZWxFZGl0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5lZGl0YWJsZU1vZGVDaGFuZ2UuZW1pdCgndmlldycpO1xyXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQuY2FuY2VsRWRpdCgpKTtcclxuICAgIHRoaXMuY2FuY2VsLmVtaXQoKTtcclxuICB9XHJcbn1cclxuIl19