import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateComponent } from './+template/template.component';
import { ReactiveComponent } from './+reactive/reactive.component';
import { DynamicComponent } from './+dynamic/dynamic.component';
import { FormControlComponent } from './+dynamic/form-control.component';
import { routes } from './form.routes';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    })
  ],
  declarations: [
    FormComponent,
    TemplateComponent,
    ReactiveComponent,
    DynamicComponent,
    FormControlComponent
  ]
})

export class FormModule {}