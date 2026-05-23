import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  form = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(3), UsernameValidators.cannotContainSpace],  UsernameValidators.shouldBeUnique),
    password: new FormControl('',[Validators.required, Validators.minLength(3)])
  });

  get username() {
    return this.form.get('username');
  }
  get password() {
    return  this.form.get('password');
  }
}
