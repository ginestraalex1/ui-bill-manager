import { Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LogInPageComponent } from './components/pages/log-in-page/log-in-page.component';
import { isLogged } from './security/guards';

export const routes: Routes = [
    { path: 'log-in', component: LogInPageComponent },
    { path: '', component: HomePageComponent, canActivate: [isLogged] },
    { path: 'home', component: HomePageComponent, canActivate: [isLogged] },
    { path: '**', redirectTo: 'home' }
];

