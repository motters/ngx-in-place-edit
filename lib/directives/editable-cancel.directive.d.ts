import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { EditableComponent } from '../editable/editable.component';
export declare class EditableCancelDirective implements OnInit, OnDestroy {
    private readonly editable;
    private el;
    cancelEvent: string;
    private destroy$;
    constructor(editable: EditableComponent, el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
