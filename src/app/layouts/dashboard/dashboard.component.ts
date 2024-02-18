import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private authService: AuthService) {}
   
  
  showFiller = false;
  showEditForm = false;

  /* Cierre de sesion */
  logOut(){
    this.authService.logOut();
  }
  
  //studentEdit!: Student ;

//   onStudentSubmit(ev: Student): void {
//       let lastStudent = this.dataSource[this.dataSource.length -1 ];      
//       ev.id = lastStudent.id +1;
//       this.dataSource = [...this.dataSource, ev];
//   }

//   onStudentEditSubmit(ev: any): void {
//     if(ev.editVisible) {
//       this.showEditForm = true;
//       this.studentEdit = ev.studentToEdit;
//     }    
// }

// onStudentModify(ev: Student) {
//     //let indice: number = this.dataSource.findIndex(s => s.id === ev.id );
//     // tuve que hacer esto de eliminar y volver a agregar porque de otra manera no me lo actualizaba
//     console.log(ev)
//     console.log(ev.id)
//     this.dataSource = this.dataSource.filter(el => el.id != ev.id);
    
//     this.dataSource = [...this.dataSource, ev];
    
//     this.showEditForm = false;

//     console.log(this.dataSource) 
// }

}
