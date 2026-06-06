import { Component ,OnInit} from '@angular/core';
import { GlobalService } from '../../services/global';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-profil',
  imports: [RouterLink],
  templateUrl: './profil.html',
  styleUrl: './profil.scss',
})
export class Profil {
  

  constructor(public global: GlobalService) {}

}
