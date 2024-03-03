import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Inscripcion } from '../../../../models/inscripcion';
import { Store } from '@ngrx/store';
import { InscripcionesActions } from '../store/inscripciones.actions';
import { selectInscripciones } from '../store/inscripciones.selectors';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from '../../students/student-dialog/student-dialog.component';
import { Student } from '../../../../models/student';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-inscripciones-view',
  templateUrl: './inscripciones-view.component.html',
  styleUrl: './inscripciones-view.component.scss'
})
export class InscripcionesViewComponent implements OnDestroy{

  constructor(private store: Store, private matDialog: MatDialog, public authService: AuthService) {
      this.cargarData();
   }  

  displayedColumns: string[] = ['Id', 'Fecha', 'Curso', 'Dia', 'Horario', 'Profesor/a', 'Alumno/a', 'Acciones'];

  dataSource: Inscripcion[] = [];

  destroyed$ = new Subject();

  cargarData() {
     this.store.select(selectInscripciones).pipe(takeUntil(this.destroyed$)).subscribe({
      next: (inscripciones) => {
        this.dataSource = inscripciones;
        console.log(this.dataSource);
      }
    });

    this.store.dispatch(InscripcionesActions.loadInscripcioness());
    console.log(this.dataSource)
  }

  verStudentData(student: Student): void {
    this.matDialog.open(StudentDialogComponent, { data: student });
  }

  deleteInscripcion(inscripcion: Inscripcion) {}

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
