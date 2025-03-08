import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'lab2-cloud',
    loadComponent: () => import('./lab2-cloud/lab2-cloud.page').then( m => m.Lab2CloudPage)
  },
  {
    path: 'abstract-class',
    loadComponent: () => import('./abstract-class/abstract-class.page').then( m => m.AbstractClassPage)
  },
];
