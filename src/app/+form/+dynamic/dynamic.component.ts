import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hero } from '../../+model/hero-model';
import { HeroService } from '../../+service/hero.service';
import { FieldBase } from './form-field/field-base';
import { Textbox } from './form-field/textbox';
import { Select } from './form-field/select';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})

export class DynamicComponent implements OnInit {

  constructor(private router: Router, private heroService: HeroService) { }

  hero = new Hero(undefined, 'Dr IQ', 'Really Smart', 'IQ Products Company');

  @Input() fields: FieldBase<any>[] = [
    new Textbox({
      type: "text",
      key: "name",
      label: "Name",
      value: this.hero.name,
      required: true,
      placeholder: "Name",
      order: 1
    }),
    new Select({
      key: "power",
      label: "Power",
      value: this.hero.power,
      required: true,
      options: [
        {key: 'Really Smart', value: 'Really Smart'},
        {key: 'Super Flexible', value: 'Super Flexible'},
        {key: 'Super Hot', value: 'Super Hot'},
        {key: 'Weather Changer', value: 'Weather Changer'}
      ],
      order: 2
    }), 
    new Textbox({
      type: "text",
      key: "company",
      label: "Company",
      value: this.hero.company,
      placeholder: "Company",
      order: 3
    }),
  ];

  heroForm: FormGroup;

  ngOnInit() {
    this.fields.sort((a, b) => a.order - b.order);
    this.heroForm = this.toFormGroup(this.fields);
  }

  toFormGroup(fields: FieldBase<any>[]) {
    let group: any = {};
    this.fields.forEach(field => {
      group[field.key] = field.required ? new FormControl(field.value || '', Validators.required) 
                                        : new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }

  submitted = false;

  formErrors = {
    'formError': ''
  };
  
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