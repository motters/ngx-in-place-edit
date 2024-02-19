import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { EditableComponent } from '../editable/editable.component';
export declare class EditableSaveDirective implements OnInit, OnDestroy {
    private readonly editable;
    private readonly el;
    saveEvent: string;
    private destroy$;
    constructor(editable: EditableComponent, el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
