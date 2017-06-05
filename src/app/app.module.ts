import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
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
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService) 
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