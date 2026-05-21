import { Component, inject, signal ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as API from "../../lib/api";



@Component({
  selector: 'app-fiche-tech',
  imports: [],
  templateUrl: './fiche-tech.html',
  styleUrl: './fiche-tech.scss',
})

export class FicheTech  implements OnInit {

  images: any[] = [];
  

  private methodoId = signal('');
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    // Access route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.methodoId.set(params['id']);
      // @TODO trouver la methodo et les pro
    });
  }

  async ngOnInit() {
    await this.loadMethodologies();
  }

  async loadMethodologies() {
    this.images = await API.getOne(String(this.methodoId));
    
  }
}
