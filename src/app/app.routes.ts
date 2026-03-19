import { Routes } from '@angular/router';
import { Layout } from './modules/site/layout/layout';

export const routes: Routes = [

  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/site/site.routes').then(m => m.SITE_ROUTES),
      },

    ],
  },

  // fallback global
  { path: '**', redirectTo: '' },
];



