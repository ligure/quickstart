import { Component, OnInit } from '@angular/core';
import { Hero } from '../+model/hero-model';
import { HeroService } from '../+service/hero.service';
import { fadeInOut } from '../+animations/fade-in-out';
import { flyInOut } from '../+animations/fly-in-out';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ '../../../assets/css/dashboard.component.css' ],
  animations: [ fadeInOut, flyInOut ]
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
  
}