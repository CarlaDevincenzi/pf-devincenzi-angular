import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesViewComponent } from './inscripciones-view/inscripciones-view.component';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './store/inscripciones.effects';
import { StoreModule } from '@ngrx/store';
import { inscripcionesFeature } from './store/inscripciones.reducer';
import { InscripcionFormComponent } from './inscripcion-form/inscripcion-form.component';


@NgModule({
  declarations: [
    InscripcionesViewComponent,
    InscripcionFormComponent,    
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    StoreModule.forFeature(inscripcionesFeature),
    SharedModule,
    EffectsModule.forFeature([InscripcionesEffects]),
    
  ]
})
export class InscripcionesModule { }
