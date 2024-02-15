import {  Component } from '@angular/core';
import { Student } from '../../../../models/student';
import { StudentService } from '../../../../services/student.service';


@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrl: './students-view.component.scss'
})
export class StudentsViewComponent {
  
  constructor(private studentService: StudentService) {
    this.getStudents();
   }  

  dataSource: Student[] = [];
 

  displayedColumns: string[] = ['Id', 'Nombre Completo', 'DNI', 'Email', 'Acciones'];

  getStudents(){
    this.studentService.getAllStudents().subscribe({
      next: (students) => this.dataSource = students,
      error: (errorData) => {
        console.error(errorData);
        alert(errorData);
      }
    })
  }
  

  deleteStudent(student: Student): void {
    let opcion = confirm(`Desea eliminar al estudiante: ${student.name} ${student.lastName} ?` );

    if(opcion){
      this.studentService.deleteStudent(student.id).subscribe({
        next: () => {
          alert(`Estudiante eliminado con éxito`);
        },
        error: (err) => {
          alert(`Error al intentar eliminar
          el estudiante con el id: ${student.id}\nDescripción: ${err}`);
        }
      })
    }      
  }  

  verMas(id: Number){}
  
}



