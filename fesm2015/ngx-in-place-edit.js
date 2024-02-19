import { Directive, TemplateRef, InjectionToken, EventEmitter, Component, ChangeDetectionStrategy, ElementRef, Inject, Input, Output, ContentChild, HostListener, ContentChildren, NgModule } from '@angular/core';
import { BehaviorSubject, Subject, fromEvent } from 'rxjs';
import { withLatestFrom, filter, takeUntil, skip, take, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

class ViewModeDirective {
    constructor(tpl) {
        this.tpl = tpl;
    }
}
ViewModeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[view]',
            },] }
];
ViewModeDirective.ctorParameters = () => [
    { type: TemplateRef }
];

class EditModeDirective {
    constructor(tpl) {
        this.tpl = tpl;
    }
}
EditModeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[edit]',
            },] }
];
EditModeDirective.ctorParameters = () => [
    { type: TemplateRef }
];

const DEFAULT_CONFIG = {
    openOn: 'click',
    closeOn: 'click',
};
const EDITABLE_CONFIG = new InjectionToken('editable.config', {
    factory() {
        return DEFAULT_CONFIG;
    },
});

class EditableComponent {
    constructor(el, config) {
        this.el = el;
        this.config = config;
        this.openOn = this.config.openOn;
        this.closeOn = this.config.closeOn;
        this.save = new EventEmitter();
        this.cancel = new EventEmitter();
        this.onStateChange = new EventEmitter();
        this.editMode = new BehaviorSubject(false);
        this.editMode$ = this.editMode.asObservable();
        this.destroy$ = new Subject();
        this.isGrouped = false;
    }
    get element() {
        return this.el.nativeElement;
    }
    ngOnInit() {
        this.handleViewMode();
        this.handleEditMode();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
    }
    handleViewMode() {
        this.viewHandler = fromEvent(this.element, this.openOn)
            .pipe(withLatestFrom(this.editMode$), filter(([_, editMode]) => !editMode), takeUntil(this.destroy$))
            .subscribe(() => this.displayEditMode());
    }
    handleEditMode() {
        const clickOutside$ = (editMode) => fromEvent(document, this.closeOn).pipe(filter(() => editMode), 
        /*
        skip the first propagated event if there is a nested node in the viewMode templateRef
        so it doesn't trigger this eventListener when switching to editMode
         */
        skip(this.openOn === this.closeOn ? 1 : 0), filter(({ target }) => this.element.contains(target) === false), take(1));
        this.editHandler = this.editMode$
            .pipe(switchMap((editMode) => clickOutside$(editMode)), takeUntil(this.destroy$))
            .subscribe(() => this.saveEdit());
    }
    displayEditMode() {
        this.editMode.next(true);
        this.onStateChange.emit('edit');
    }
    saveEdit() {
        this.save.next();
        this.leaveEditMode();
    }
    cancelEdit() {
        this.cancel.next();
        this.leaveEditMode();
    }
    leaveEditMode() {
        this.editMode.next(false);
        this.onStateChange.emit('view');
        if (!this.isGrouped) {
            this.viewHandler.unsubscribe();
            setTimeout(() => this.handleViewMode(), 0);
        }
    }
}
EditableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-inline-edit',
                template: `
    <ng-container *ngTemplateOutlet="(editMode$ | async) ? editModeTpl.tpl : viewModeTpl.tpl"></ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [':host {cursor: pointer;}']
            },] }
];
EditableComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [EDITABLE_CONFIG,] }] }
];
EditableComponent.propDecorators = {
    openOn: [{ type: Input }],
    closeOn: [{ type: Input }],
    save: [{ type: Output }],
    cancel: [{ type: Output }],
    onStateChange: [{ type: Output }],
    viewModeTpl: [{ type: ContentChild, args: [ViewModeDirective,] }],
    editModeTpl: [{ type: ContentChild, args: [EditModeDirective,] }]
};

class EditableSaveDirective {
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

class EditableCancelDirective {
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

class EditableFocusDirective {
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

class EditableOnEnterDirective {
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

class EditableOnEscapeDirective {
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

class EditableGroupDirective {
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

class EditableGroupActionDirective {
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

class EditableGroupCancelDirective extends EditableGroupActionDirective {
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

class EditableGroupSaveDirective extends EditableGroupActionDirective {
    onClick() {
        this.group.saveEdit();
    }
}
EditableGroupSaveDirective.decorators = [
    { type: Directive, args: [{
                selector: '[editableGroupSave]',
            },] }
];
EditableGroupSaveDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ['click',] }]
};

class EditableGroupEditDirective extends EditableGroupActionDirective {
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

class InlineEditModule {
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

/*
 * Public API Surface of edit-in-place
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DEFAULT_CONFIG, EDITABLE_CONFIG, InlineEditModule, EditableComponent as ɵa, ViewModeDirective as ɵb, EditModeDirective as ɵc, EditableSaveDirective as ɵd, EditableCancelDirective as ɵe, EditableFocusDirective as ɵf, EditableOnEnterDirective as ɵg, EditableOnEscapeDirective as ɵh, EditableGroupDirective as ɵi, EditableGroupCancelDirective as ɵj, EditableGroupActionDirective as ɵk, EditableGroupSaveDirective as ɵl, EditableGroupEditDirective as ɵm };
//# sourceMappingURL=ngx-in-place-edit.js.map
