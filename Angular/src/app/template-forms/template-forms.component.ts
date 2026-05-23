import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent {

  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone'}
  ]
  onChange(f) {
    console.log(f);
  }
  onSubmit(myform) {
    console.log(myform);
  }
}
