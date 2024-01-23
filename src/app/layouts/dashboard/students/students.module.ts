import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsViewComponent } from './students-view/students-view.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentEditFormComponent } from './student-edit-form/student-edit-form.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FullNamePipe } from '../../../pipes/full-name.pipe';
import { FontSizeDirective } from '../../../directives/font-size.directive';



@NgModule({
  declarations: [
    StudentsViewComponent,
    StudentFormComponent,
    StudentEditFormComponent,   
    FullNamePipe,
    FontSizeDirective
  ],
  imports: [
    CommonModule,
    MatPaginator,
    MatPaginatorModule,    
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [StudentsViewComponent, StudentFormComponent, StudentEditFormComponent]
})
export class StudentsModule { }
