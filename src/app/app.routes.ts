import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Acceuil } from './pages/acceuil/acceuil';
import { FicheTech } from './pages/fiche-tech/fiche-tech';
import { Profil } from './pages/profil/profil';
import { Update } from './pages/update/update';

export const routes: Routes = [
    { path: "login", component: Login },
    { path: "acceuil", component: Acceuil },
    { path: "profil", component: Profil },
    { path: ":methodo", component: FicheTech },
    { path: ":update", component: Update }
];
