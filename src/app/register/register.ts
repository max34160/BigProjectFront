import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
 
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
export class AccountCreationComponent {
  form: FormGroup;
  hidePassword = true;
 
  searchOptions = [
    'Des informations sur la santé mentale',
    'Un soutien psychologique',
    'Des ressources pour proches aidants',
    'De l\'aide pour une addiction',
    'Des conseils sur le bien-être',
  ];
 
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required, Validators.minLength(8)]],
      recherche: ['', Validators.required],
    });
  }
 
  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    }
  }
 
  onCancel(): void {
    this.form.reset();
  }
}