import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../+model/hero-model';
import { HeroService } from '../../+service/hero.service';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})

export class TemplateComponent {

  constructor(private router: Router, private heroService: HeroService) { }

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(undefined, 'Dr IQ', this.powers[0], 'IQ Products Company');

  submitted = false;
  
  onSubmit() {
    this.submitted = true;
    this.heroService.create(this.model);
    this.router.navigate(['/heroes']);
  }

}