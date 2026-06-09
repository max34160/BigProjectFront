import { Component, OnInit , inject, signal} from '@angular/core';
import { MatFormField, MatLabel, MatError } from "@angular/material/form-field";
import { ActivatedRoute} from '@angular/router';
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

  constructor(private fb: FormBuilder,public global: GlobalService) { 
    this.form = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.activatedRoute.params.subscribe(async (params) => {
      this.nameUpdate.set(params['exercer']);
      this.update.set({ update: this.nameUpdate().slice(1) });

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
        const result = await API.getOneByProAndMethodo(this.global.pro.id_pro,this.form.value.methodo);
        if(result.exercer){
          const update = await API.updateExercer(this.form.value.methodo,this.global.pro.id_pro);
          const findMethodo = await API.getOnMethodo(update.exercer.id_methodo)
          this.global.exercer = findMethodo.methodo.titre;
        }else{
          const newExercer = await API.addNewExercer(this.form.value.methodo,this.global.pro.id_pro);
          const findMethodo = await API.getOnMethodo(newExercer.exercer.id_methodo)
          this.global.exercer = findMethodo.methodo.titre;
        }

      }
    }
}