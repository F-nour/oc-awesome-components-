import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormRoutingModule} from './form-routing.module';
import {SharedModule} from "../shared/shared.module";
import {ComplexFormService} from "./services/complex-form.service";
import {RegisterFormComponent} from "./components/register-form/register-form.component";


@NgModule({
  "declarations": [
    RegisterFormComponent
  ],
  "imports": [
    CommonModule,
    SharedModule,
    FormRoutingModule
  ],
  "providers": [
    ComplexFormService
  ],
})
export class FormModule {
}
