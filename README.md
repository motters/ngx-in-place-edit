# Angular-Inline-Edit

All credit goes to: https://www.npmjs.com/package/ngx-in-place-edit

I've a made a small mod to allow ngIf to be used on the edit template.

## _ngx-in-place-edit is copy of angular-ngx-inline-edit is a library of Angular that allows you to create editable elements. Such technique is also known as click-to-edit or edit-in-place._

## Difference b/w angular-ngx-inline-edit and ngx-in-place-edit that ngx-in-place-edit changes mode with single click unlike angular-ngx-inline-edit

Table of contents
=================

  * [Getting started](#getting-started)
  * [Usage](#usage)
  * [Derivates Table](#derivates-table)
  * [Output Events](#output-events)

## Getting started
### Step 1: Install `ngx-in-place-edit`:

#### NPM
```shell
npm i ngx-in-place-edit
```
### Step 2: Import the InlineEditModule:
```js
import {InlineEditModule} from 'ngx-in-place-edit';

@NgModule({
  declarations: [AppComponent],
  imports: [InlineEditModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Usage
```
<div *ngFor="let entity of entities; let index = index" style="display: block;">
	<ngx-inline-edit (onStateChange)="updateField(entity.name)">
		<ng-template view>
			{{entity.name}}
		</ng-template>
		<ng-template edit>
			<input type="text" [formControl]="userName" focusable editable>
		</ng-template>
	</ngx-inline-edit>

	<ngx-inline-edit (onStateChange)="updateField(entity.isAdmin)">
		<ng-template view>{{entity.isAdmin}}</ng-template>
		<ng-template edit>
			<input type="checkbox" [formControl]="userType">&nbsp;{{entity.isAdmin}}
		</ng-template>
	</ngx-inline-edit>
</div>
```

## Derivates Table
| Derivative Name | Description |
| ------------- | ------------- | 
| focusable     | It makes the input field to be focusable. |
| editable      | It registers an event listener, which calls the component’s method whenever the user clicks ‘enter’ to change its state from edit to view.
| view | It is responsible for exposing a reference to their TemplateRef (For View).
| edit | It is responsible for exposing a reference to their TemplateRef (For Edit).

## Output Events
_Currently Only one event is emitted which is **onStateChange**. This is emitted when we switch back to view mode from edit mode using this we can check whether new value is equal to old value or use it for any other purpose._

### Author
* [Sam Arora]


## License

MIT