import { AfterViewInit, EventEmitter, QueryList } from '@angular/core';
import { EditableComponent } from '../editable/editable.component';
import { Mode } from '../editable/mode';
export declare class EditableGroupDirective implements AfterViewInit {
    children: QueryList<EditableComponent>;
    save: EventEmitter<void>;
    cancel: EventEmitter<void>;
    editableModeChange: EventEmitter<Mode>;
    ngAfterViewInit(): void;
    displayEditMode(): void;
    saveEdit(): void;
    cancelEdit(): void;
}
