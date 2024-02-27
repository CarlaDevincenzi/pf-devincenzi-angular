import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosViewComponent } from './cursos-view/cursos-view.component';
import { MatTableModule } from '@angular/material/table';
import { CursoRoutingModule } from './curso-routing.module';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { SharedModule } from '../../../shared/shared.module';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    CursosViewComponent, 
    CursoFormComponent ],
    
  imports: [
    CommonModule,
    MatTableModule,   
    CursoRoutingModule,    
    SharedModule,
    MatSelectModule,
    
  ]
})
export class CursosModule { }
