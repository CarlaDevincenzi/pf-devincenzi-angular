import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosViewComponent } from './cursos-view/cursos-view.component';
import { CursoFormComponent } from './curso-form/curso-form.component';

const routes: Routes = [
  {
    // Actualmente estamos en: /dashboard/cursos,
    path: '',
    component: CursosViewComponent
  },
  {
    path: 'nuevo',
    component: CursoFormComponent
  },
  {
    path: ':id/editar',
    component: CursoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoRoutingModule {} 
