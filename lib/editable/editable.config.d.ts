import { InjectionToken } from '@angular/core';
import { TriggerEvents } from './editable.types';
export interface EditableConfig {
    openOn?: TriggerEvents;
    closeOn?: TriggerEvents;
}
export declare const DEFAULT_CONFIG: EditableConfig;
export declare const EDITABLE_CONFIG: InjectionToken<EditableConfig>;
