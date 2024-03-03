import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InscripcionesViewComponent } from "./inscripciones-view/inscripciones-view.component";
import { authGuard } from "../../../core/guards/auth.guard";
import { InscripcionFormComponent } from "./inscripcion-form/inscripcion-form.component";

const routes: Routes = [
    {
        // Actualmente estamos en: dashboard/inscripciones,
        path: '',
        component: InscripcionesViewComponent
      },
      {
        path: 'nuevo',
        component: InscripcionFormComponent,
        canActivate: [authGuard], data: {roles: ['ADMIN', 'USER']},
      }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class InscripcionesRoutingModule {}