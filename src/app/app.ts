import { Component, signal } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
=======
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import {MatTabsModule, MatTabLink } from '@angular/material/tabs';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabsModule, MatIcon, RouterLinkWithHref, RouterLink, MatTabLink],
>>>>>>> 0276949736f9a9adc601b0dffd668883ac98d965
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('BigProject');
}