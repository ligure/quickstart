import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">{{'dashboard' | translate}}</a>
      <a routerLink="/heroes" routerLinkActive="active">{{'heroes' | translate}}</a>
      <a routerLink="/search" routerLinkActive="active">{{'search' | translate}}</a>
      <a routerLink="/new" routerLinkActive="active">{{'new' | translate}}</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['../../assets/css/app.component.css'],
})

export class AppComponent {

  title = 'Tour of Heroes';

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