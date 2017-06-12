import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'my-forms',
  template: `
    <nav>
      <a routerLink="template" routerLinkActive="active">{{'templateForm' | translate}}</a>
      <a routerLink="reactive" routerLinkActive="active">{{'reactiveForm' | translate}}</a>
      <a routerLink="dynamic" routerLinkActive="active">{{'dynamicForm' | translate}}</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['../../../assets/css/app.component.css'],
})

export class FormComponent {
  constructor(
    public translate: TranslateService,
  ) {}
  ngOnInit() {
    this.translate.addLangs(["zh", "en"]);
    this.translate.setDefaultLang('zh');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }
}