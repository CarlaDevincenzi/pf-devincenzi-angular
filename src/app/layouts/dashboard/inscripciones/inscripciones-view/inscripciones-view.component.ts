import { Component } from '@angular/core';
import { InscripcionService } from '../../../../services/inscripcion.service';
import { StudentService } from '../../../../services/student.service';
import { AuthService } from '../../../../services/auth.service';
import { CursoService } from '../../../../services/curso.service';
import { Inscripcion } from '../../../../models/inscripcion';
import { Student } from '../../../../models/student';
import { Store } from '@ngrx/store';
import { InscripcionesActions } from '../store/inscripciones.actions';

interface InscripcionesData  {
  id: number;
  fecha: Date;
  curso: String;
  dia: String;
  horario: String;
  teacher: String;
  student: Student;
}

@Component({
  selector: 'app-inscripciones-view',
  templateUrl: './inscripciones-view.component.html',
  styleUrl: './inscripciones-view.component.scss'
})
export class InscripcionesViewComponent {

  constructor(private inscripcionService: InscripcionService, private store: Store,
    private studentService: StudentService, 
    private cursoService: CursoService, public authService: AuthService) {
      this.cargarData();
   }  

  displayedColumns: string[] = ['Id', 'Fecha', 'Curso', 'Dia', 'Horario', 'Profesor/a', 'Alumno/a', 'Acciones'];

  dataSource: InscripcionesData[] = [];

  cargarData() {
    this.store.dispatch(InscripcionesActions.loadInscripcioness());
  }

  deleteInscripcion(inscripcion: Inscripcion) {}

}
