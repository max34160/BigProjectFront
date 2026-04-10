import { Routes } from '@angular/router';
import { AccountCreationComponent } from './register/register';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: 'creation-compte', component: AccountCreationComponent },
  { path: '', redirectTo: 'creation-compte', pathMatch: 'full' },
  { path: "login", component: Login }
];