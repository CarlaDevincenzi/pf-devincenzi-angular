import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosViewComponent } from './cursos-view/cursos-view.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CursoRoutingModule } from './curso-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../../shared/shared.module';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    CursosViewComponent, 
    CursoFormComponent ],
    
  imports: [
    CommonModule,
    MatTableModule,    
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    CursoRoutingModule,
    MatButtonModule,
    SharedModule,
    MatSelectModule,
    MatInputModule,
  ]
})
export class CursosModule { }
