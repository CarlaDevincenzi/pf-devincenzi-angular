import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsViewComponent } from './students-view/students-view.component';
import { StudentFormComponent } from './student-form/student-form.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';


@NgModule({
  declarations: [
    StudentsViewComponent,
    StudentFormComponent,
    StudentDialogComponent,     
  ],
  imports: [
    CommonModule,
    MatPaginator,
    MatPaginatorModule,    
    MatTableModule,    
    StudentRoutingModule,
    SharedModule
  ]
  
})
export class StudentsModule { }
