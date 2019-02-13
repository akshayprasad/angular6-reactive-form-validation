import { NgModule } from '@angular/core';
import { ValidationDirective } from './index';
import { FieldErrorDisplayComponent } from './index';
import { CommonModule } from '@angular/common';

const SHARED_DIRECTIVES = [
    ValidationDirective
];

const SHARED_COMPONENTS = [
    FieldErrorDisplayComponent
];

@NgModule({
    imports: [CommonModule],
    exports: [...SHARED_DIRECTIVES, ...SHARED_COMPONENTS],
    declarations: [...SHARED_DIRECTIVES, ...SHARED_COMPONENTS]
})

export class SharedModule {}
