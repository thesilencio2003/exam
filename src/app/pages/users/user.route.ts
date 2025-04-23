import { Routes } from '@angular/router';

export default [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    title: 'Users',
    loadComponent: () => import('./list-users/users.component'),
  },
  {
    path: 'users/:id',
    title: 'Users-Detail',
    loadComponent: () => import('./detalle-usuario/detalle-usuario.component'),
  },
] as Routes;