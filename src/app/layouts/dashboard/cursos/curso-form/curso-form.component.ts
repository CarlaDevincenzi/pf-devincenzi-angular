import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursoService } from '../../../../services/curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../../../../models/curso';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrl: './curso-form.component.scss'
})
export class CursoFormComponent implements OnInit{

  cursoForm!: FormGroup;
  curso?: Curso;

  CURSOS: string[] = ["JAVASCRIPT", "REACT", "VUE.JS", "BIG-DATA", "JAVA SE", "ANGULAR", "DISEÑO WEB", "SPRING BOOT", "PYTHON", "DJANGO"];
  DIAS_SEMANA: string[] = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES"];
  HORARIOS: string[] = ["17.00", "18.30", "19.00", "20.00", "20.30"];

  constructor(private fb: FormBuilder, private cursoService: CursoService,
    private router: Router, private activateRoute: ActivatedRoute) {}
  
  
  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get("id");

    if(id) {
      this.cursoService.getCursoById(parseInt(id)).subscribe(
        (curso) => {
          this.curso = curso;

          this.cursoForm = this.fb.group({
            name: this.fb.control(this.curso?.name, Validators.required),
            day: this.fb.control(this.curso?.day, Validators.required),
            time: this.fb.control(this.curso?.time, Validators.required),
            teacher: this.fb.control(this.curso?.teacher, Validators.pattern(/^[\p{L}ñ\s]+ [\p{L}ñ\s]+$/))
          })
        }
      );

    } else {
        this.cursoForm = this.fb.group({
          name: this.fb.control('', Validators.required),
          day: this.fb.control('', Validators.required),
          time: this.fb.control('', Validators.required),
          teacher: this.fb.control('', Validators.pattern(/^[a-zA-ZñÑ\s]+(?: [a-zA-ZñÑ\s]+)?$/))
        })
    }
  }

  get name() {return this.cursoForm.get('name')}
  get day() {return this.cursoForm.get('day')}
  get time() {return this.cursoForm.get('time')}
  get teacher() {return this.cursoForm.get('teacher')}

  onSubmit() {    
    if (this.cursoForm.valid) {
      if(this.curso) {
          this.cursoService.updateCursoById(this.cursoForm.value as Curso)
            .subscribe(() => {
          this.router.navigateByUrl("/dashboard/cursos");
        })     
        this.cursoForm.reset({});   
      } else {
        this.cursoService.addCurso(this.cursoForm.value as Curso)
          .subscribe(() => {
            this.router.navigateByUrl("/dashboard/cursos");
          })            
        this.cursoForm.reset({});   
      }      
      
    } else {
      this.cursoForm.markAllAsTouched();
    }
  }


}
