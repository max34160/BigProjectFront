import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormField } from '@angular/material/input';
import { MatButton, MatIconButton } from "@angular/material/button";
import { NgIf } from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import * as API from "../../lib/api";

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

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required, Validators.minLength(8)]]
    });
  }



  async submitForm() {
    if (this.form.valid) {
          const result = await  API.login(this.form.value.email,this.form.value.password);
    }
  }
}