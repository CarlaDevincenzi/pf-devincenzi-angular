import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
        // /dashboard
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard], data: {roles: ['ADMIN', 'USER']},
    },
    
        // /dashboard/students
    {
      path: 'students',
      loadChildren: () => import('./students/students.module')
      .then((m) => m.StudentsModule ),
    },

    // /dashboard/cursos
    {
      path: 'cursos',
      loadChildren: () => import('./cursos/cursos.module')
        .then((m) => m.CursosModule)
    },

    // /dashboard/inscripciones
    {
      path: 'inscripciones',
      loadChildren: () => import('./inscripciones/inscripciones.module')
        .then((m) => m.InscripcionesModule)
    },    
    {
      path: '**',
      redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}