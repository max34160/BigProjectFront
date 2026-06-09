import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Acceuil } from './pages/acceuil/acceuil';
import { FicheTech } from './pages/fiche-tech/fiche-tech';
import { Profil } from './pages/profil/profil';
import { ProfilPro } from './pages/profil-pro/profil-pro';
import { Update } from './pages/update/update';
import { Register } from './pages/register/register';
import { VerifPro } from './pages/verif-pro/verif-pro';

export const routes: Routes = [
    { path: "", redirectTo: "acceuil", pathMatch: "full" },
    { path: "login", component: Login },
    { path: "register", component: Register },
    { path: "acceuil", component: Acceuil },
    { path: "profil", component: Profil },
    { path: "profil-pro", component: ProfilPro },
    { path: "verif-pro", component: VerifPro },
    { path: "update/:update", component: Update },
    { path: ":methodo", component: FicheTech },
];
