import { Component } from '@angular/core';
import * as API from "../../lib/api";

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.html',
  styleUrl: './profil.scss',
})
export class Profil {
  images: any[] = [];
  

  

  constructor() {
  }

  async ngOnInit() {
    await this.loadMethodologies();
  }

  async loadMethodologies() {
    // this.images = await API.getOne(String(this.methodoId));
    
  }
}
