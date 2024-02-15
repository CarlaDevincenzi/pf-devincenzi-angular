import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../../models/student';
import { StudentService } from '../../../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent implements OnInit{  

  studentForm!: FormGroup;
  student?: Student;
  
  validaciones = {
      name: [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-ZñÑ\s]+(?: [a-zA-ZñÑ\s]+)?$/)],
      dni: [Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(7),Validators.maxLength(8)],
      email: [Validators.required, Validators.email]
  }

  constructor(private fb: FormBuilder, private studentService: StudentService, 
    private router: Router, private activateRoute: ActivatedRoute) { }
  
  
    ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get("id");

    if(id) {
      this.studentService.getStudentById(parseInt(id))
      .subscribe(student => {
        this.student = student;

        this.studentForm = this.fb.group({
          name: this.fb.control(student?.name, this.validaciones.name),
          lastName: this.fb.control(student?.lastName, this.validaciones.name),
          dni: this.fb.control(student?.dni, this.validaciones.dni),
          email: this.fb.control(student?.email, this.validaciones.email)      
        });
      })        
      
    } else {
      this.studentForm = this.fb.group({
        name: this.fb.control('', this.validaciones.name),
        lastName: this.fb.control('', this.validaciones.name),
        dni: this.fb.control('', this.validaciones.dni),
        email: this.fb.control('', this.validaciones.email)      
      });
    }
  }

  get name() {return this.studentForm.get('name')}
  get lastName() {return this.studentForm.get('lastName')}
  get dni() { return this.studentForm.get('dni')}  
  get email() {return this.studentForm.get('email')}

  onSubmit() {    
    if (this.studentForm.valid) {
      if(this.student) {
          this.studentService.updateStudentById(this.studentForm.value as Student)
        .subscribe(() => {
          this.router.navigateByUrl("dashboard/students");
        })     
        this.studentForm.reset({});   
      } else {
        this.studentService.addStudent(this.studentForm.value as Student)
        .subscribe(() => {
          this.router.navigateByUrl("dashboard/students");
        })     
        this.studentForm.reset({});   
      }      
      
    } else {
      this.studentForm.markAllAsTouched();
    }
  }

}
