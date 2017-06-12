import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { FormsModule }          from '@angular/forms';
import { HttpModule, Http }           from '@angular/http';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './+dashboard/dashboard.component';
import { HeroSearchComponent }  from './+search/hero-search.component';
import { HeroDetailComponent }  from './+detail/hero-detail.component';
import { HeroListComponent }    from './+list/hero-list.component';
import { HeroService }          from './+service/hero.service';
import { AppRoutingModule }     from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './+service/in-memory-data.service';

@NgModule({
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    //angular-in-memory-web-api会拦截angular的http请求，angular-in-memory-web-api不认可的请求会返回404，生产环境不适用。
    //InMemoryWebApiModule.forRoot(InMemoryDataService),  //使用TranslateModule需要注释掉本行。
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    })
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroDetailComponent,
    HeroListComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }