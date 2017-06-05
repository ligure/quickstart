import { Component } from '@angular/core';

@Component({
  selector: 'my-forms',
  template: `
    <nav>
      <a routerLink="template" routerLinkActive="active">模板驱动型表单</a>
      <a routerLink="reactive" routerLinkActive="active">响应式表单</a>
      <a routerLink="dynamic" routerLinkActive="active">动态表单</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['../../../assets/css/app.component.css'],
})

export class FormComponent { }