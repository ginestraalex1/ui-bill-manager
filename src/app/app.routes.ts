import { Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';

export const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: '', component: HomePageComponent },

];
