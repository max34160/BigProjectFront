import { Routes } from '@angular/router';
<<<<<<< HEAD
import { AccountCreationComponent } from './register/register';

export const routes: Routes = [
  { path: 'creation-compte', component: AccountCreationComponent },
  { path: '', redirectTo: 'creation-compte', pathMatch: 'full' }
];
=======
import { Login } from './pages/login/login';

export const routes: Routes = [
    { path: "login", component: Login }
];
>>>>>>> 0276949736f9a9adc601b0dffd668883ac98d965
