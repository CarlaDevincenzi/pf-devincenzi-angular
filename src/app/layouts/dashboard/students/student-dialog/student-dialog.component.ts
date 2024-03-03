import { Component, Inject } from '@angular/core';
import { Student } from '../../../../models/student';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrl: './student-dialog.component.scss'
})
export class StudentDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public student?: Student) {

  }
  
}
