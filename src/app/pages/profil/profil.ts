import { Component } from '@angular/core';
import { GlobalService } from '../../services/global';
import { RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './profil.html',
  styleUrl: './profil.scss',
})
export class Profil {
  constructor(public global: GlobalService) {}
}
