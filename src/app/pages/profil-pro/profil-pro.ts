import { Component } from '@angular/core';
import { GlobalService } from '../../services/global';

@Component({
  selector: 'app-profil-pro',
  imports: [],
  templateUrl: './profil-pro.html',
  styleUrl: './profil-pro.scss',
})
export class ProfilPro {
  constructor(public global: GlobalService) {}
  
}
