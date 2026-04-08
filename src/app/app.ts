import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import {MatTabsModule, MatTab, MatTabGroup, MatTabLink } from '@angular/material/tabs';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabsModule, MatTab, MatTabGroup, MatIcon, RouterLinkWithHref, RouterLink, MatTabLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('BigProject');
}