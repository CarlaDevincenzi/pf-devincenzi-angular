import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide: boolean = true;  
  loginError:string = "";
  user!: User | any;

  loginForm: FormGroup;  

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService){
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
   } 
   
    get password() { return this.loginForm.get('password'); }
    get email() { return this.loginForm.get('email'); }

  login(){
    if(this.loginForm.valid){
      this.userService.getUsers().subscribe({
          next: (userData) => {    
            this.user = userData.find(u => u.email === this.email?.value);

            if(this.user) {
              if(this.user.password === this.password?.value) {
                  localStorage.setItem("userId", JSON.stringify(this.user.id));
                  localStorage.setItem("userType", JSON.stringify(this.user.role));                  
                              
                  this.router.navigate(['dashboard']);
                  this.loginForm.reset();
              } else {
                this.loginError = "Contraseña incorrecta";
              }
            } else {
              this.loginError = "Usuario no Registrado";
            }
          },
          error: (errorData) => {
            console.error(errorData);
          }
      })    
    }else {
        this.loginForm.markAllAsTouched();
    }
  }
}
