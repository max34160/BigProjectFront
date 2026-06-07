import { Component } from '@angular/core';
import { GlobalService } from '../../services/global';
import { MatButton } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-profil-pro',
  imports: [MatButton, RouterLink],
  templateUrl: './profil-pro.html',
  styleUrl: './profil-pro.scss',
})
export class ProfilPro {
  constructor(public global: GlobalService) {}
  
}
