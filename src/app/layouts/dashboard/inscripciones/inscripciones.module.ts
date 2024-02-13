import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesViewComponent } from './inscripciones-view/inscripciones-view.component';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';



@NgModule({
  declarations: [
    InscripcionesViewComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule
  ]
})
export class InscripcionesModule { }
