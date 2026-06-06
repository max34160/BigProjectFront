// global.service.ts
import { P } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public isLogged: boolean = false;
  public isPro: boolean = false;
  public user: any = null;
  public pro: any = null;
  

  constructor() { }
}