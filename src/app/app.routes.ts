import { Routes } from '@angular/router';

export const routes: Routes = [
  {
  
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    title: 'Users',
    loadComponent: () => import('./pages/users/list-users/users.component'),
  },
  {
    path: 'users/:id',
    title: 'Users-Detail',
    loadComponent: () => import('./pages/users/detalle-usuario/detalle-usuario.component'), 
  },
];
