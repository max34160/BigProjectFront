import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import * as API from "../../lib/api";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormField, MatLabel, MatError } from "@angular/material/form-field";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { GlobalService } from '../../services/global';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-update',
  imports: [MatInputModule, ReactiveFormsModule, MatFormField, MatLabel, MatError, MatButton, MatIcon, MatIconButton, RouterLink],
  templateUrl: './update.html',
  styleUrl: './update.scss',
})
export class Update {
  form: FormGroup;
  hidePassword = true;

  update = signal<any>({});
  private nameUpdate = signal('');
  private activatedRoute = inject(ActivatedRoute);

  constructor(private fb: FormBuilder, public global: GlobalService , private router: Router) {
    this.form = this.fb.group({
      update: ['', [Validators.required]],
    });
    this.activatedRoute.params.subscribe(async (params) => {
      this.nameUpdate.set(params['update']);
      this.update.set({ update: this.nameUpdate().slice(1) });

    });
  }


  async onUpdate() {
    if (this.form.valid) {
      if (this.nameUpdate() == ":nom") {
        const result = await API.updateNameUser(this.form.value.update, this.global.user.id_user);
        if (result.user) {
          this.global.user = result.user;
          this.router.navigate(['/profil']);
        }
      } else if (this.nameUpdate() == ":prenom") {
        const result = await API.updateFirstNameUser(this.form.value.update, this.global.user.id_user);
        if (result.user) {
          this.global.user = result.user;
        }
      } else if (this.nameUpdate() == ":age") {
        const result = await API.updateAgeUser(Number(this.form.value.update), this.global.user.id_user);
        if (result.user) {
          this.global.user = result.user;
        }
      } else if (this.nameUpdate() == ":email") {
        const result = await API.updateEmailUser(this.form.value.update, this.global.user.id_user);
        if (result.user) {
          this.global.user = result.user;
        }
      } else if (this.nameUpdate() == ":password") {
        const result = await API.updatePasswordUser(this.form.value.update, this.global.user.id_user);
        if (result.user) {
          this.global.user = result.user;
        }
      } else if (this.nameUpdate() == ":nom_cabinet") {
        const result = await API.updateNameOffice(this.form.value.update, this.global.pro.id_pro);
        if (result.pro) {
          this.global.pro = result.pro;
        }
      } else if (this.nameUpdate() == ":adresse") {
        const result = await API.updateAddressOffice(this.form.value.update, this.global.pro.id_pro);
        if (result.pro) {
          this.global.pro = result.pro;
        }
      } else if (this.nameUpdate() == ":ville") {
        const result = await API.updateCityOffice(this.form.value.update, this.global.pro.id_pro);
        if (result.pro) {
          this.global.pro = result.pro;
        }
      } else if (this.nameUpdate() == ":description") {
        const result = await API.updateDescriptionOffice(this.form.value.update, this.global.pro.id_pro);
        if (result.pro) {
          this.global.pro = result.pro;
        }
      } else if (this.nameUpdate() == ":horraire_cabinet") {
        const result = await API.updateOfficeHours(this.form.value.update, this.global.pro.id_pro);
        if (result.pro) {
          this.global.pro = result.pro;
        }
      }
    }
  }
}
