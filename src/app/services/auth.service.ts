import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private userService: UserService) { }

  /* Cierre de sesion */
  logOut(){
    localStorage.clear();
    this.router.navigateByUrl("");    
  }

  // logIn(userData: User){
  //   this.userService.getUsers().subscribe({
  //     next: (users) => {    
  //       let user = users.find(u => u.email === userData.email);

  //       if(user) {
  //         if(user.password === userData.password) {
  //             localStorage.setItem("userId", JSON.stringify(user.id));
  //             localStorage.setItem("userType", JSON.stringify(user.role));                  
                          
  //             this.router.navigate(['dashboard']);
              
  //         } else {
  //           this.loginError = "Contraseña incorrecta";
  //         }
  //       } else {
  //         this.loginError = "Usuario no Registrado";
  //       }
  //     },
  //     error: (errorData) => {
  //       console.error(errorData);
  //     }
  // })    
  // }
}
