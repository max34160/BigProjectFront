import { Component } from '@angular/core';
import { GlobalService } from '../../services/global';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profil-pro',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './profil-pro.html',
  styleUrl: './profil-pro.scss',
})
export class ProfilPro {
  constructor(public global: GlobalService) {}
  
}
