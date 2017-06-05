import { Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { TemplateComponent } from './+template/template.component';
import { ReactiveComponent } from './+reactive/reactive.component';
import { DynamicComponent } from './+dynamic/dynamic.component';

export const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      { path: '', component: TemplateComponent },
      { path: 'template', component: TemplateComponent },
      { path: 'reactive', component: ReactiveComponent },
      { path: 'dynamic', component: DynamicComponent }
    ]
  }
];