import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
        // /students
        {path: 'students',
        loadChildren: () =>
          import('./students/students.module').then(
            (m) => m.StudentsModule
          ),
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