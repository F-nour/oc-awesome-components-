import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormRoutingModule} from './form-routing.module';
import {ComplexeFormComponent} from './components/complexe-form/complexe-form.component';
import {SharedModule} from "../shared/shared.module";
import {ComplexFormService} from "./services/complex-form.service";


@NgModule({
  "declarations": [
    ComplexeFormComponent
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
