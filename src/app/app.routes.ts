import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Acceuil } from './pages/acceuil/acceuil';

export const routes: Routes = [
    { path: "login", component: Login },
    { path: "acceuil", component: Acceuil }
];
