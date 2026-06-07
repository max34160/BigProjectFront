import { Component } from '@angular/core';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { FormBuilder, FormGroup, ReactiveFormsModule , Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-verif-pro',
  imports: [MatFormField, MatLabel, MatInput, ReactiveFormsModule, RouterLink],
  templateUrl: './verif-pro.html',
  styleUrl: './verif-pro.scss',
})
export class VerifPro {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      idNat: ['', [Validators.required]],
    });
  }
}
