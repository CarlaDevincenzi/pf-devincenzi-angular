import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsViewComponent } from './students-view/students-view.component';
import { StudentFormComponent } from './student-form/student-form.component';


const routes: Routes = [
  {
    // Actualmente estamos en: /students,
    path: '',
    component: StudentsViewComponent
  },
  {
    path: 'nuevo',
    component: StudentFormComponent
  },
  {
    path: ':id/editar',
    component: StudentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}