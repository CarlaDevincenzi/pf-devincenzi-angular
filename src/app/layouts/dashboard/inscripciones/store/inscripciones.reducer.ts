import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionesActions } from './inscripciones.actions';
import { Inscripcion } from '../../../../models/inscripcion';

export const inscripcionesFeatureKey = 'inscripciones';

export interface State {
  inscripciones: Inscripcion[];
  error: unknown;
}

export const initialState: State = {
  inscripciones: [],
  error: null
};

export const reducer = createReducer(
  initialState,
  on(InscripcionesActions.loadInscripcioness, state => ({...state})),
  on(InscripcionesActions.loadInscripcionessSuccess, (state, action) => ({ ...state, inscripciones: action.data })),
  on(InscripcionesActions.loadInscripcionessFailure, (state, action) => ({ ...state, error: action.error})),
);

export const inscripcionesFeature = createFeature({
  name: inscripcionesFeatureKey,
  reducer,
});

