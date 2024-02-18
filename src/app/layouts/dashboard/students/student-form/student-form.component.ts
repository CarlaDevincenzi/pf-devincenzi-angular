import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../../models/student';
import { StudentService } from '../../../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {  

  studentForm!: FormGroup;
  student?: Student;
  id?: string | null;
  
  validaciones = {
      name: [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-ZñÑ\s]+(?: [a-zA-ZñÑ\s]+)?$/)],
      dni: [Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(7),Validators.maxLength(8)],
      email: [Validators.required, Validators.email]
  }

  constructor(private fb: FormBuilder, private studentService: StudentService, 
    private router: Router, private activateRoute: ActivatedRoute) { 
      this.id = this.activateRoute.snapshot.paramMap.get("id");

      this.studentForm = this.fb.group({
        name: this.fb.control('', this.validaciones.name),
        lastName: this.fb.control('', this.validaciones.name),
        dni: this.fb.control('', this.validaciones.dni),
        email: this.fb.control('', this.validaciones.email)      
      });

      if(this.id) {
        this.studentService.getStudentById(parseInt(this.id))
        .subscribe(student => {
          this.student = student;
          
          console.log("student: " + student.name);

          this.studentForm = this.fb.group({
            name: this.fb.control(this.student?.name, this.validaciones.name),
            lastName: this.fb.control(this.student?.lastName, this.validaciones.name),
            dni: this.fb.control(this.student?.dni, this.validaciones.dni),
            email: this.fb.control(this.student?.email, this.validaciones.email)                  
          });          
        });
    }  
  }

  get name() {return this.studentForm.get('name')}
  get lastName() {return this.studentForm.get('lastName')}
  get dni() { return this.studentForm.get('dni')}  
  get email() {return this.studentForm.get('email')}

  onSubmit() { 
    console.log(this.studentForm.value)   
    if (this.studentForm.valid) {
      if(this.student) {
          this.studentService.updateStudentById(this.student.id, this.studentForm.value as Student)
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
