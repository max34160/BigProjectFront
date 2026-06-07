import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { GlobalService } from "../../services/global";
import * as API from "../../lib/api";

@Component({
  selector: 'app-verif-pro',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './verif-pro.html',
  styleUrl: './verif-pro.scss',
})
export class VerifPro {
  form: FormGroup;
  cabinetForm: FormGroup;
  medecinInfo: any = null;
  errorMessage = '';
  private router = inject(Router);

  constructor(private fb: FormBuilder, public global: GlobalService) {
    this.form = this.fb.group({
      idNat: ['', [Validators.required]],
    });
    this.cabinetForm = this.fb.group({
      nom_cabinet: ['', [Validators.required]],
      description: [''],
      horaire_cabinet: [''],
    });
  }

  async verify() {
    this.errorMessage = '';
    const result = await API.verifyPro(this.form.value.idNat);
    if (result.error) {
      this.errorMessage = result.error;
    } else {
      this.medecinInfo = result;
    }
  }

  async register() {
    await API.registerPro(
      this.form.value.idNat,
      this.global.user.id_user,
      this.cabinetForm.value.nom_cabinet,
      this.cabinetForm.value.description,
      this.cabinetForm.value.horaire_cabinet,
    );
    this.router.navigate(['/profil']);
  }
}
