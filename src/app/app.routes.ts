import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-page/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'dossiers',
                pathMatch: 'full',
            },
            {
                path: 'dossiers',
                loadComponent: () =>
                    import('./pages/dossiers/dossiers.component').then(
                        (module) => module.DossiersComponent
                    ),
            },
            {
                path: 'page1',
                loadComponent: () =>
                    import('./pages/page1/page1.component').then(
                        (module) => module.Page1Component
                    ),
            },
            {
                path: 'page2',
                loadComponent: () =>
                    import('./pages/page2/page2.component').then(
                        (module) => module.Page2Component
                    ),
            },
            {
                path: '**',
                redirectTo: 'dossiers',
            },
        ],
    },
];
