import { Component } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrl: './login.scss',
  imports: [FormsModule, MatInputModule, ReactiveFormsModule],
})

export class Login {
  constructor(){}
  nom: string = "";
  prenom: string = "";
  age: number = 0;
  password: string = "";
  email: string = "";
}
