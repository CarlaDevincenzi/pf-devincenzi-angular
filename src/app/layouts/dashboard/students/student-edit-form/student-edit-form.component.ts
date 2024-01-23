import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../../models/student';

@Component({
  selector: 'app-student-edit-form',
  templateUrl: './student-edit-form.component.html',
  styleUrl: './student-edit-form.component.scss'
})
export class StudentEditFormComponent implements OnInit{

  @Input() student!: Student ;  
  @Output() studentEdited = new EventEmitter();

  studentForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      id: this.fb.control(this.student.id),
      name: this.fb.control(this.student.name, [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]),
      lastName: this.fb.control(this.student.lastName, [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]),
      dni: this.fb.control(this.student.dni, [Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(7),Validators.maxLength(8)]),
      email: this.fb.control(this.student.email, [Validators.required, Validators.email])      
    });
  }
  

  get name() {return this.studentForm.get('name')}
  get lastName() {return this.studentForm.get('lastName')}
  get dni() { return this.studentForm.get('dni')}  
  get email() {return this.studentForm.get('email')}

  onSubmit() {
    if (this.studentForm.valid) {
      this.studentEdited.emit(this.studentForm.value as Student);
      this.studentForm.reset({});
      this.studentForm.markAsPristine();
      this.studentForm.markAsUntouched();
    } else {
      this.studentForm.markAllAsTouched();
    }
  }

}
