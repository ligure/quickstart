import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/search" routerLinkActive="active">Search</a>
      <a routerLink="/new" routerLinkActive="active">New</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['../../assets/css/app.component.css'],
})

export class AppComponent {
  title = 'Tour of Heroes';
}