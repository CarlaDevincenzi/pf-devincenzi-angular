import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsViewComponent } from './students-view/students-view.component';
import { StudentFormComponent } from './student-form/student-form.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FullNamePipe } from '../../../shared/pipes/full-name.pipe';
import { FontSizeDirective } from '../../../shared/directives/font-size.directive';
import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    StudentsViewComponent,
    StudentFormComponent,     
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
    MatInputModule,
    StudentRoutingModule,
    SharedModule
  ]
  
})
export class StudentsModule { }
