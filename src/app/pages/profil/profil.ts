import { Component ,OnInit} from '@angular/core';
import { GlobalService } from '../../services/global';
import { Router, RouterLink } from "@angular/router";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-profil',
  imports: [RouterLink, MatButton],
  templateUrl: './profil.html',
  styleUrl: './profil.scss',
})
export class Profil {
  

  constructor(public global: GlobalService, private router: Router) {
    if(this.global.isPro){
      this.router.navigate(['/profil-pro']);
    }
  }
  
}
