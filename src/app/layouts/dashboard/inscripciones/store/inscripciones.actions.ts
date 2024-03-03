import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Inscripcion } from '../../../../models/inscripcion';

export const InscripcionesActions = createActionGroup({
  source: 'Inscripciones',
  events: {
    'Load Inscripcioness': emptyProps(),
    'Load Inscripcioness Success': props<{ data: Inscripcion[] }>(),
    'Load Inscripcioness Failure': props<{ error: unknown }>(),
  }
});
