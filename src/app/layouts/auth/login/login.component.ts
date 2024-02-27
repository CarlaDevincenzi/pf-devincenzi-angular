import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LoginCredentials } from '../../../models/loginCredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide: boolean = true;  
  loginError:string = "";
  loginForm: FormGroup;  

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService){
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
   } 
   
    get password() { return this.loginForm.get('password'); }
    get email() { return this.loginForm.get('email'); }

  login(){
    if(this.loginForm.valid){

      this.authService.logIn(this.loginForm.value as LoginCredentials).subscribe({
        next: (user) => {
          if(user) {
            localStorage.setItem("userId", user.id.toString());
            localStorage.setItem("userType", JSON.stringify(user.role));                  
                              
            this.router.navigate(['dashboard']);
            this.loginForm.reset(); 
          } else {
            this.loginError = "Usuario o contraseña incorrectos";
          }
        },      
        error: (errorData) => {
            console.error(errorData);
        }
      });    
    }else {
        this.loginForm.markAllAsTouched();
    }
  }
}
