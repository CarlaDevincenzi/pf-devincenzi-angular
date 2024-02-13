import { Component } from '@angular/core';
import { CursoService } from '../../../../services/curso.service';
import { Curso } from '../../../../models/curso';

@Component({
  selector: 'app-cursos-view',
  templateUrl: './cursos-view.component.html',
  styleUrl: './cursos-view.component.scss'
})
export class CursosViewComponent {

  constructor(private cursoService: CursoService) {
    this.getCursos();
   }  

  dataSource: Curso[] = []; 

  displayedColumns: string[] = ['Id', 'Curso', 'Dia', 'Horario', 'Profesor/a', 'Acciones'];

  getCursos(){
    this.cursoService.getAllCursos().subscribe({
      next: (cursos) => this.dataSource = cursos
    })
  }
  

  deleteCurso(curso: Curso): void {
    let opcion = confirm(`Desea eliminar el curso: ${curso.name} ?` );

    if(opcion){
      this.cursoService.deleteCurso(curso.id).subscribe({
        next: (cursos) => this.dataSource = [...cursos]
      })
    }     
      
  }  

  verMas(id: Number){}
  

}
