import { Component } from '@angular/core';

import { Fields } from '../fields';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  flowers = [
    'Red Roses',
    'Orchids',
    'Lilies',
    'Tulips'
  ];

  // @ts-ignore
  model = new Fields(18, 'Deisi', 'Bonilla', 'deisi@google.com', this.flowers[1]);

  submitted = false;

  // tslint:disable-next-line:typedef
  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  // tslint:disable-next-line:typedef
  get diagnostic() { return JSON.stringify(this.model); }

  // tslint:disable-next-line:typedef
  newField() {
    // @ts-ignore
    this.model = new Fields(42, '', '', '', this.flowers[3]);
  }

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  // tslint:disable-next-line:typedef
  showFormControls(form: any) {
    return form && form.controls.name && form.controls.name.value; // Dr. IQ
  }

}
