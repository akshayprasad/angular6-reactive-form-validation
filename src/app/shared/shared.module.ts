import { NgModule } from '@angular/core';
import { ValidationDirective } from './index';
import { FieldErrorDisplayComponent, NotFoundComponent } from './index';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const SHARED_DIRECTIVES = [
    ValidationDirective
];

const SHARED_COMPONENTS = [
    FieldErrorDisplayComponent,
    NotFoundComponent
];

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
    exports: [...SHARED_DIRECTIVES, ...SHARED_COMPONENTS],
    declarations: [...SHARED_DIRECTIVES, ...SHARED_COMPONENTS]
})

export class SharedModule {}
