import { Component, inject, signal ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as API from "../../lib/api";



@Component({
  selector: 'app-fiche-tech',
  imports: [],
  templateUrl: './fiche-tech.html',
  styleUrl: './fiche-tech.scss',
})

export class FicheTech  {

  methodo = signal<any>({});
  

  private methodoId = signal('');
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    
    this.activatedRoute.params.subscribe(async (params) => {
      this.methodoId.set(params['methodo']);
      const images = await API.getOne(this.methodoId());
      this.methodo.set(images);
      
    });
  }
}
