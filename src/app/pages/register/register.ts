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
 
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
 
  onCancel(): void {
    this.form.reset();
  }

  async register(): Promise<void> {
    if (this.form.invalid) return;

    try {
      const reponse = await fetch('/api/user/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: this.form.value.nom,
          prenom: this.form.value.prenom,
          age: this.form.value.age,
          email: this.form.value.email,
          motDePasse: this.form.value.motDePasse
        })
      });

      if (!reponse.ok) {
        const err = await reponse.json();
        console.error('Erreur création:', err);
        return;
      }

      const data = await reponse.json();
      console.log('Utilisateur enregistré:', data);
    } catch (e) {
      console.error('Erreur réseau:', e);
    }
  }
}
  