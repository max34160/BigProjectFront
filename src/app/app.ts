import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import {MatTabsModule, MatTabLink } from '@angular/material/tabs';
import { MatIcon } from "@angular/material/icon";
import * as API from "./lib/api";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabsModule, MatIcon, RouterLinkWithHref, RouterLink, MatTabLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('BigProject');
  isVisible : boolean = false;

  async submitForm() {
      
    const result = await  API.authByToken();
    if (result ){
      this.isVisible = true;
    }
      
  }

}