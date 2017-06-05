import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../+model/hero-model';
import { HeroService } from '../../+service/hero.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})

export class ReactiveComponent implements OnInit {

  constructor(private router: Router, private heroService: HeroService, private fb: FormBuilder) { }

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  hero = new Hero(undefined, 'Dr IQ', this.powers[0], 'IQ Products Company');

  heroForm: FormGroup;

  submitted = false;

  public formErrors = {
    'name': '',
    'power': '',
    'formError': ''
  };

  validationMessages = {
    'name': {
      'required': 'Name is required',
      'minlength': '用户名4到32个字符。',
      'maxlength': '用户名4到32个字符。'
    },
    'power': {
      'required': 'Power is required'
    }
  };

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.heroForm = this.fb.group({
      "name": [
        this.hero.name,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(32)
        ]
      ],
      "power": [
        this.hero.power,
        [
          Validators.required
        ]
      ],
      "company": [
        this.hero.company
      ],
    });
    this.heroForm
        .valueChanges
        .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.heroForm) {
      return;
    }
    const form = this.heroForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    if (this.heroForm.valid) {
      this.submitted = true;
      this.hero = this.heroForm.value;
      this.heroService
          .create(this.hero)
          .then(
            data => {
              this.router.navigate(['/heroes']);
            },
            error => {
              this.formErrors.formError = error.message;
              console.error(error);
            }
          )
    } else {
      this.formErrors.formError = "存在不合法的输入项，请检查。";
    }
  }

}