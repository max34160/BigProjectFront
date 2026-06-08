import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import * as API from "../../lib/api";
import { GlobalService } from '../../services/global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-creation',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register {
  form: FormGroup;
  hidePassword = true;

  searchOptions = [
    'Des informations sur la santé mentale',
    'Un soutien psychologique',
    'Des ressources pour proches aidants',
    'De l\'aide pour une addiction',
    'Des conseils sur le bien-être',
  ];

  constructor(private fb: FormBuilder, private router: Router, public global: GlobalService) {
    this.form = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      const result = await API.register(this.form.value.nom, this.form.value.prenom, this.form.value.age, this.form.value.email, this.form.value.password);
      if (result.token) {
        this.global.user = result.user;
        this.global.isLogged = true;
        this.router.navigate(['/profil']);

      }
    }
  }

  async linkLogin() {
    this.router.navigate(['/logins']);
  }


}
