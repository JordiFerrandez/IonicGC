import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  elForm: any;
  hideHTML: boolean;

  constructor(private fb: FormBuilder) {
    this.elForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      clave: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.hideHTML = true;
  }

  get email(){
    return this.elForm.get('email');
  }

  get clave(){
    return this.elForm.get('clave');
  }

  public errorMessages = {
    email: [
      { type: 'required', message: 'El email es obligatorio' },
      { type: 'pattern', message: 'El email tiene un formato incorrecto' }
    ],

    clave: [
      { type: 'required', message: 'La clave es obligatoria' },
      { type: 'minlength', message: 'La clave debe tener 6 carácteres al menos' }
    ]
  };

  public doLogin() {
    this.hideHTML=false;
  } 
}
