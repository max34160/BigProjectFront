import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormField } from '@angular/material/input';
import { MatButton, MatIconButton } from "@angular/material/button";
import { NgIf } from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import * as API from "../../lib/api";
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global';

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrl: './login.scss',
  imports: [FormsModule, MatInputModule, ReactiveFormsModule, MatFormField, MatButton, NgIf, MatIcon, MatIconButton],
})

export class Login {

  form: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder , private router: Router ,public global: GlobalService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }



  async submitForm() {
    if (this.form.valid) {
          const result = await  API.login(this.form.value.email,this.form.value.password);
          if(result.token){
            const isPro = await API.isPro(result.user.id_user);
            if(isPro.pro){
              this.global.pro = isPro.pro;
              this.global.isPro = true ;
            }
            this.global.user = result.user;
            this.global.isLogged = true;
            this.router.navigate(['/profil']);
            
          }
    }
  }
}