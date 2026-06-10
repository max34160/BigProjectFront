import { Component, OnInit, inject, signal } from '@angular/core';
import { MatFormField, MatLabel, MatError } from "@angular/material/form-field";
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelect } from "@angular/material/select";
import { MatOption } from "@angular/material/core";
import * as API from "../../lib/api";
import { MatButton } from "@angular/material/button";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgIf } from "@angular/common";
import { GlobalService } from '../../services/global';

@Component({
  selector: 'app-update-methodo',
  imports: [MatFormField, MatSelect, MatOption, MatButton, ReactiveFormsModule, MatError, NgIf],
  templateUrl: './update-methodo.html',
  styleUrl: './update-methodo.scss',
})
export class UpdateMethodo implements OnInit {
  form: FormGroup;
  hidePassword = true;

  update = signal<any>({});
  private nameUpdate = signal('');
  private activatedRoute = inject(ActivatedRoute);

  images: any[] = [];

  constructor(private fb: FormBuilder, public global: GlobalService, private router: Router) {
    this.form = this.fb.group({
      methodo: ['', [Validators.required]]
    });
    this.activatedRoute.params.subscribe(async (params) => {
      this.nameUpdate.set(params['exercer']);
      this.update.set({ update: this.nameUpdate().slice(1) });

    });
    this.form.get('methodo')?.valueChanges.subscribe(v => {
      console.log('Valeur sélectionnée :', v);
    });
  }

  async ngOnInit() {
    await this.loadMethodologies();
  }

  async loadMethodologies() {
    this.images = await API.getAllMethodologie();
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      const result = await API.getOneByPro(this.global.pro.id_pro);
      if (result.exercer) {
        const update = await API.updateExercer(this.form.value.methodo, this.global.pro.id_pro ,this.global.exercer.id_methodologie);
        const findMethodo = await API.getOnMethodo(update.exercer.id_methodologie)
        this.global.exercer = {titre : findMethodo.methodo.titre , id_methodologie : findMethodo.methodo.id_methodologie};
        this.router.navigate(['/profil']);
      } else {
        const newExercer = await API.addNewExercer(this.global.pro.id_pro,this.form.value.methodo );
        const findMethodo = await API.getOnMethodo(newExercer.exercer.id_methodologie)
        this.global.exercer = { titre : findMethodo.methodo.titre , id_methodologie : newExercer.exercer.id_methodologie};
        this.router.navigate(['/profil']);
      }

    }
  }
}