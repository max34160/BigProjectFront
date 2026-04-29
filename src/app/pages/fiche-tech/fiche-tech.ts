import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche-tech',
  imports: [],
  templateUrl: './fiche-tech.html',
  styleUrl: './fiche-tech.scss',
})
export class FicheTech {

  private methodoName = signal('');
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    // Access route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.methodoName.set(params['methodo']);
      // @TODO trouver la methodo et les pro
    });
  }
}
