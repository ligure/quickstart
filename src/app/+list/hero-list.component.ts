import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../+model/hero-model';
import { HeroService } from '../+service/hero.service';
import { fadeInOut } from '../+animations/fade-in-out';
import { flyInOut } from '../+animations/fly-in-out';

@Component({
  selector: 'my-heroes',
  templateUrl: './hero-list.component.html',
  styleUrls: [ '../../../assets/css/hero-list.component.css' ],
  animations: [ fadeInOut, flyInOut ]
})

export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}