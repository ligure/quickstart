import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../+model/hero-model';
import { HeroService } from '../+service/hero.service';
import { fadeInOut } from '../+animations/fade-in-out';
import { flyInOut } from '../+animations/fly-in-out';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  animations: [ fadeInOut, flyInOut ]
})

export class HeroDetailComponent implements OnInit {

  hero: Hero;

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route
        .params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroService.update(this.hero).then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
  
}