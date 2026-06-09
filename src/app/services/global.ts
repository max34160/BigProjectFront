// global.service.ts
import { P } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import * as API from "../lib/api";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public isLogged: boolean = false;
  public isPro: boolean = false;
  public user: any = null;
  public pro: any = null;
  public exercer: any = null;


  constructor(private router: Router) {
    this.verifToken();
  }

  async verifToken() {
    const verif = await API.authByToken();
    if (verif.user) {
      const verifPro = await API.isPro(verif.user.id_user);
      if (verifPro.pro) {
        this.pro = verifPro.pro;
        this.isPro = true;
      }
      this.user = verif.user;
      this.isLogged = true;
      this.router.navigate(['/profil']);
    }
  }
}