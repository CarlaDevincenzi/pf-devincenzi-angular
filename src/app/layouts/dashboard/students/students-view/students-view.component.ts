import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../../../models/student';


@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrl: './students-view.component.scss'
})
export class StudentsViewComponent {
  
  constructor() {

  }  

  @Input() dataSource!: Student[];
  @Output() studentEditSubmit = new EventEmitter();
 

  displayedColumns: string[] = ['Id', 'Nombre Completo', 'DNI', 'Email', 'modify', 'delete'];
  

  deleteStudent(student: Student): void {
    let opcion = confirm(`Desea eliminar al estudiante: ${student.name} ${student.lastName} ?` );

    if(opcion)     
      this.dataSource = this.dataSource.filter(el => el.id != student.id);
      
  }

  // le envio al dashboard un objeto 
  updateStudent(student: Student) {
    this.studentEditSubmit.emit({
      editVisible: true,
      studentToEdit: student
    });
  }
  
}



