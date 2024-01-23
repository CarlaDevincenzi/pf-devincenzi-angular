import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../../models/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {

  studentForm: FormGroup;

  @Output() studentSubmit = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]),
      lastName: this.fb.control('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]),
      dni: this.fb.control('', [Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(7),Validators.maxLength(8)]),
      email: this.fb.control('', [Validators.required, Validators.email])      
    });
  }

  get name() {return this.studentForm.get('name')}
  get lastName() {return this.studentForm.get('lastName')}
  get dni() { return this.studentForm.get('dni')}  
  get email() {return this.studentForm.get('email')}

  onSubmit() {
    if (this.studentForm.valid) {
      this.studentSubmit.emit(this.studentForm.value as Student);
      this.studentForm.reset({});
      this.studentForm.markAsPristine();
      this.studentForm.markAsUntouched();
      
    } else {
      this.studentForm.markAllAsTouched();
    }
  }

}
