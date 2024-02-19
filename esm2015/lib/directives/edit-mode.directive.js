import { Directive, TemplateRef } from '@angular/core';
export class EditModeDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1tb2RlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbi1wbGFjZS1lZGl0L3NyYy9saWIvZGlyZWN0aXZlcy9lZGl0LW1vZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3ZELE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFBNEIsR0FBcUI7UUFBckIsUUFBRyxHQUFILEdBQUcsQ0FBa0I7SUFBRyxDQUFDOzs7WUFKdEQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2FBQ25COzs7WUFKbUIsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2VkaXRdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRNb2RlRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgdHBsOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxyXG59XHJcbiJdfQ==