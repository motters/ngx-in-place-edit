(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-in-place-edit', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-in-place-edit'] = {}, global.ng.core, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, rxjs, operators, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var ViewModeDirective = /** @class */ (function () {
        function ViewModeDirective(tpl) {
            this.tpl = tpl;
        }
        return ViewModeDirective;
    }());
    ViewModeDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[view]',
                },] }
    ];
    ViewModeDirective.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };

    var EditModeDirective = /** @class */ (function () {
        function EditModeDirective(tpl) {
            this.tpl = tpl;
        }
        return EditModeDirective;
    }());
    EditModeDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[edit]',
                },] }
    ];
    EditModeDirective.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };

    var DEFAULT_CONFIG = {
        openOn: 'click',
        closeOn: 'click',
    };
    var EDITABLE_CONFIG = new core.InjectionToken('editable.config', {
        factory: function () {
            return DEFAULT_CONFIG;
        },
    });

    var EditableComponent = /** @class */ (function () {
        function EditableComponent(el, config) {
            this.el = el;
            this.config = config;
            this.openOn = this.config.openOn;
            this.closeOn = this.config.closeOn;
            this.save = new core.EventEmitter();
            this.cancel = new core.EventEmitter();
            this.onStateChange = new core.EventEmitter();
            this.editMode = new rxjs.BehaviorSubject(false);
            this.editMode$ = this.editMode.asObservable();
            this.destroy$ = new rxjs.Subject();
            this.isGrouped = false;
        }
        Object.defineProperty(EditableComponent.prototype, "element", {
            get: function () {
                return this.el.nativeElement;
            },
            enumerable: false,
            configurable: true
        });
        EditableComponent.prototype.ngOnInit = function () {
            this.handleViewMode();
            this.handleEditMode();
        };
        EditableComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
        };
        EditableComponent.prototype.handleViewMode = function () {
            var _this = this;
            this.viewHandler = rxjs.fromEvent(this.element, this.openOn)
                .pipe(operators.withLatestFrom(this.editMode$), operators.filter(function (_a) {
                var _b = __read(_a, 2), _ = _b[0], editMode = _b[1];
                return !editMode;
            }), operators.takeUntil(this.destroy$))
                .subscribe(function () { return _this.displayEditMode(); });
        };
        EditableComponent.prototype.handleEditMode = function () {
            var _this = this;
            var clickOutside$ = function (editMode) { return rxjs.fromEvent(document, _this.closeOn).pipe(operators.filter(function () { return editMode; }), 
            /*
            skip the first propagated event if there is a nested node in the viewMode templateRef
            so it doesn't trigger this eventListener when switching to editMode
             */
            operators.skip(_this.openOn === _this.closeOn ? 1 : 0), operators.filter(function (_a) {
                var target = _a.target;
                return _this.element.contains(target) === false;
            }), operators.take(1)); };
            this.editHandler = this.editMode$
                .pipe(operators.switchMap(function (editMode) { return clickOutside$(editMode); }), operators.takeUntil(this.destroy$))
                .subscribe(function () { return _this.saveEdit(); });
        };
        EditableComponent.prototype.displayEditMode = function () {
            this.editMode.next(true);
            this.onStateChange.emit('edit');
        };
        EditableComponent.prototype.saveEdit = function () {
            this.save.next();
            this.leaveEditMode();
        };
        EditableComponent.prototype.cancelEdit = function () {
            this.cancel.next();
            this.leaveEditMode();
        };
        EditableComponent.prototype.leaveEditMode = function () {
            var _this = this;
            this.editMode.next(false);
            this.onStateChange.emit('view');
            if (!this.isGrouped) {
                this.viewHandler.unsubscribe();
                setTimeout(function () { return _this.handleViewMode(); }, 0);
            }
        };
        return EditableComponent;
    }());
    EditableComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-inline-edit',
                    template: "\n    <ng-container *ngTemplateOutlet=\"(editMode$ | async) ? editModeTpl.tpl : viewModeTpl.tpl\"></ng-container>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [':host {cursor: pointer;}']
                },] }
    ];
    EditableComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: undefined, decorators: [{ type: core.Inject, args: [EDITABLE_CONFIG,] }] }
    ]; };
    EditableComponent.propDecorators = {
        openOn: [{ type: core.Input }],
        closeOn: [{ type: core.Input }],
        save: [{ type: core.Output }],
        cancel: [{ type: core.Output }],
        onStateChange: [{ type: core.Output }],
        viewModeTpl: [{ type: core.ContentChild, args: [ViewModeDirective,] }],
        editModeTpl: [{ type: core.ContentChild, args: [EditModeDirective,] }]
    };

    var EditableSaveDirective = /** @class */ (function () {
        function EditableSaveDirective(editable, el) {
            this.editable = editable;
            this.el = el;
            this.saveEvent = 'click';
            this.destroy$ = new rxjs.Subject();
        }
        EditableSaveDirective.prototype.ngOnInit = function () {
            var _this = this;
            rxjs.fromEvent(this.el.nativeElement, this.saveEvent)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () { return _this.editable.saveEdit(); });
        };
        EditableSaveDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
        };
        return EditableSaveDirective;
    }());
    EditableSaveDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[editableOnSave]',
                },] }
    ];
    EditableSaveDirective.ctorParameters = function () { return [
        { type: EditableComponent },
        { type: core.ElementRef }
    ]; };
    EditableSaveDirective.propDecorators = {
        saveEvent: [{ type: core.Input }]
    };

    var EditableCancelDirective = /** @class */ (function () {
        function EditableCancelDirective(editable, el) {
            this.editable = editable;
            this.el = el;
            this.cancelEvent = 'click';
            this.destroy$ = new rxjs.Subject();
        }
        EditableCancelDirective.prototype.ngOnInit = function () {
            var _this = this;
            rxjs.fromEvent(this.el.nativeElement, this.cancelEvent)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () { return _this.editable.cancelEdit(); });
        };
        EditableCancelDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next(true);
        };
        return EditableCancelDirective;
    }());
    EditableCancelDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[editableOnCancel]',
                },] }
    ];
    EditableCancelDirective.ctorParameters = function () { return [
        { type: EditableComponent },
        { type: core.ElementRef }
    ]; };
    EditableCancelDirective.propDecorators = {
        cancelEvent: [{ type: core.Input }]
    };

    var EditableFocusDirective = /** @class */ (function () {
        function EditableFocusDirective(el) {
            this.el = el;
        }
        EditableFocusDirective.prototype.ngOnInit = function () {
            this.el.nativeElement.focus();
        };
        return EditableFocusDirective;
    }());
    EditableFocusDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[editableFocusable]',
                },] }
    ];
    EditableFocusDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };

    var EditableOnEnterDirective = /** @class */ (function () {
        function EditableOnEnterDirective(editable) {
            this.editable = editable;
        }
        EditableOnEnterDirective.prototype.onEnter = function () {
            this.editable.saveEdit();
        };
        return EditableOnEnterDirective;
    }());
    EditableOnEnterDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[editableOnEnter]',
                },] }
    ];
    EditableOnEnterDirective.ctorParameters = function () { return [
        { type: EditableComponent }
    ]; };
    EditableOnEnterDirective.propDecorators = {
        onEnter: [{ type: core.HostListener, args: ['keyup.enter',] }]
    };

    var EditableOnEscapeDirective = /** @class */ (function () {
        function EditableOnEscapeDirective(editable) {
            this.editable = editable;
        }
        EditableOnEscapeDirective.prototype.onEnter = function () {
            this.editable.cancelEdit();
        };
        return EditableOnEscapeDirective;
    }());
    EditableOnEscapeDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[editableOnEscape]',
                },] }
    ];
    EditableOnEscapeDirective.ctorParameters = function () { return [
        { type: EditableComponent }
    ]; };
    EditableOnEscapeDirective.propDecorators = {
        onEnter: [{ type: core.HostListener, args: ['keyup.escape',] }]
    };

    var EditableGroupDirective = /** @class */ (function () {
        function EditableGroupDirective() {
            this.save = new core.EventEmitter();
            this.cancel = new core.EventEmitter();
            this.editableModeChange = new core.EventEmitter();
        }
        EditableGroupDirective.prototype.ngAfterViewInit = function () {
            this.children.forEach(function (child) { return (child.isGrouped = true); });
            this.children.forEach(function (child) { return child.viewHandler.unsubscribe(); });
            this.children.forEach(function (child) { return child.editHandler.unsubscribe(); });
        };
        EditableGroupDirective.prototype.displayEditMode = function () {
            this.editableModeChange.emit('edit');
            this.children.forEach(function (child) { return child.displayEditMode(); });
        };
        EditableGroupDirective.prototype.saveEdit = function () {
            this.editableModeChange.emit('view');
            this.children.forEach(function (child) { return child.saveEdit(); });
            this.save.emit();
        };
        EditableGroupDirective.prototype.cancelEdit = function () {
            this.editableModeChange.emit('view');
            this.children.forEach(function (child) { return child.cancelEdit(); });
            this.cancel.emit();
        };
        return EditableGroupDirective;
    }());
    EditableGroupDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[editableGroup]',
                },] }
    ];
    EditableGroupDirective.propDecorators = {
        children: [{ type: core.ContentChildren, args: [EditableComponent, { descendants: true },] }],
        save: [{ type: core.Output }],
        cancel: [{ type: core.Output }],
        editableModeChange: [{ type: core.Output }]
    };

    var EditableGroupActionDirective = /** @class */ (function () {
        function EditableGroupActionDirective(group) {
            this.group = group;
        }
        return EditableGroupActionDirective;
    }());
    EditableGroupActionDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[]',
                },] }
    ];
    EditableGroupActionDirective.ctorParameters = function () { return [
        { type: EditableGroupDirective }
    ]; };

    var EditableGroupCancelDirective = /** @class */ (function (_super) {
        __extends(EditableGroupCancelDirective, _super);
        function EditableGroupCancelDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EditableGroupCancelDirective.prototype.onClick = function () {
            this.group.cancelEdit();
        };
        return EditableGroupCancelDirective;
    }(EditableGroupActionDirective));
    EditableGroupCancelDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[editableGroupCancel]',
                },] }
    ];
    EditableGroupCancelDirective.propDecorators = {
        onClick: [{ type: core.HostListener, args: ['click',] }]
    };

    var EditableGroupSaveDirective = /** @class */ (function (_super) {
        __extends(EditableGroupSaveDirective, _super);
        function EditableGroupSaveDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EditableGroupSaveDirective.prototype.onClick = function () {
            this.group.saveEdit();
        };
        return EditableGroupSaveDirective;
    }(EditableGroupActionDirective));
    EditableGroupSaveDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[editableGroupSave]',
                },] }
    ];
    EditableGroupSaveDirective.propDecorators = {
        onClick: [{ type: core.HostListener, args: ['click',] }]
    };

    var EditableGroupEditDirective = /** @class */ (function (_super) {
        __extends(EditableGroupEditDirective, _super);
        function EditableGroupEditDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EditableGroupEditDirective.prototype.onClick = function () {
            this.group.displayEditMode();
        };
        return EditableGroupEditDirective;
    }(EditableGroupActionDirective));
    EditableGroupEditDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[editableGroupEdit]',
                },] }
    ];
    EditableGroupEditDirective.propDecorators = {
        onClick: [{ type: core.HostListener, args: ['click',] }]
    };

    var InlineEditModule = /** @class */ (function () {
        function InlineEditModule() {
        }
        return InlineEditModule;
    }());
    InlineEditModule.decorators = [
        { type: core.NgModule, args: [{
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
                    imports: [common.CommonModule],
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

    exports.DEFAULT_CONFIG = DEFAULT_CONFIG;
    exports.EDITABLE_CONFIG = EDITABLE_CONFIG;
    exports.InlineEditModule = InlineEditModule;
    exports.ɵa = EditableComponent;
    exports.ɵb = ViewModeDirective;
    exports.ɵc = EditModeDirective;
    exports.ɵd = EditableSaveDirective;
    exports.ɵe = EditableCancelDirective;
    exports.ɵf = EditableFocusDirective;
    exports.ɵg = EditableOnEnterDirective;
    exports.ɵh = EditableOnEscapeDirective;
    exports.ɵi = EditableGroupDirective;
    exports.ɵj = EditableGroupCancelDirective;
    exports.ɵk = EditableGroupActionDirective;
    exports.ɵl = EditableGroupSaveDirective;
    exports.ɵm = EditableGroupEditDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-in-place-edit.umd.js.map
