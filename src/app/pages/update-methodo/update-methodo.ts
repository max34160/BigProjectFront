import { Component, OnInit } from '@angular/core';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatSelect } from "@angular/material/select";
import { MatOption } from "@angular/material/core";
import * as API from "../../lib/api";

@Component({
  selector: 'app-update-methodo',
  imports: [MatFormField, MatLabel, MatSelect, MatOption],
  templateUrl: './update-methodo.html',
  styleUrl: './update-methodo.scss',
})
export class UpdateMethodo implements OnInit {

  images: any[] = [];

  constructor() {}

  async ngOnInit() {
    await this.loadMethodologies();
  }

  async loadMethodologies() {
    this.images = await API.getAllMethodologie();
  }
}