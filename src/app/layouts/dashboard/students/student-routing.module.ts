import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsViewComponent } from './students-view/students-view.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { authGuard } from '../../../core/guards/auth.guard';


const routes: Routes = [
  {
    // Actualmente estamos en: /students,
    path: '',
    component: StudentsViewComponent,
    canActivate: [authGuard], data: {roles: ['ADMIN', 'USER']},
  },
  {
    path: 'nuevo',
    component: StudentFormComponent,
    canActivate: [authGuard], data: {roles: ['ADMIN']},
  },
  {
    path: ':id/editar',
    component: StudentFormComponent,
    canActivate: [authGuard], data: {roles: ['ADMIN']},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}