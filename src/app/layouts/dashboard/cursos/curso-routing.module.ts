import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosViewComponent } from './cursos-view/cursos-view.component';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { authGuard } from '../../../core/guards/auth.guard';

const routes: Routes = [
  {
    // Actualmente estamos en: /dashboard/cursos,
    path: '',
    component: CursosViewComponent,
    canActivate: [authGuard], data: {roles: ['ADMIN', 'USER']},
  },
  {
    path: 'nuevo',
    component: CursoFormComponent,
    canActivate: [authGuard], data: {roles: ['ADMIN']},
  },
  {
    path: ':id/editar',
    component: CursoFormComponent,
    canActivate: [authGuard], data: {roles: ['ADMIN']},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoRoutingModule {} 
