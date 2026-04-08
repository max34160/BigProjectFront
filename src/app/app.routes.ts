import { Routes } from '@angular/router';
import { AccountCreationComponent } from './register/register';

export const routes: Routes = [
  { path: 'creation-compte', component: AccountCreationComponent },
  { path: '', redirectTo: 'creation-compte', pathMatch: 'full' }
];