import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './+dashboard/dashboard.component';
import { HeroListComponent }      from './+list/hero-list.component';
import { HeroSearchComponent }   from './+search/hero-search.component';
import { HeroDetailComponent }  from './+detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'search', component: HeroSearchComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: 'new', loadChildren: 'app/+form/form.module#FormModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}