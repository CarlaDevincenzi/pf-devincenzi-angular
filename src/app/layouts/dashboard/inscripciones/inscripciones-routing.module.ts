import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InscripcionesViewComponent } from "./inscripciones-view/inscripciones-view.component";

const routes: Routes = [
    {
        // Actualmente estamos en: dashboard/inscripciones,
        path: '',
        component: InscripcionesViewComponent
      },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class InscripcionesRoutingModule {}