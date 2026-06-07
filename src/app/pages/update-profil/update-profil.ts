import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as API from "../../lib/api";

@Component({
  selector: 'app-update-profil',
  imports: [FormsModule],
  templateUrl: './update-profil.html',
  styleUrl: './update-profil.scss',
})
export class UpdateProfil {
  private userId = '';
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  form = { nom: '', prenom: '', age: '', email: '' };

  constructor() {
    this.activatedRoute.params.subscribe(async (params) => {
      this.userId = params['id'];
      const user = await API.getUser(this.userId);
      this.form.nom = user.nom;
      this.form.prenom = user.prenom;
      this.form.age = user.age;
      this.form.email = user.email;
    });
  }

  async submit() {
    await API.updateUser(this.userId, this.form.nom, this.form.prenom, this.form.age, this.form.email);
    this.router.navigate(['/profil']);
  }
}
