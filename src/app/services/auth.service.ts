import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from './user.service';
import { LoginCredentials } from '../models/loginCredentials';
import { Observable, map } from 'rxjs';

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

  // retorna un numero con el id del usuario logueado, o null si no hay logueado
  getUsuarioLogueadoId(): number | null {
    const userIdString = localStorage.getItem("userId");

    if (userIdString !== null && typeof userIdString === 'string') {
      const userId = parseInt(userIdString, 10);

      if (!isNaN(userId)) {
        return userId;
      }
    }
    return null;
  }

  logIn(credentials: LoginCredentials): Observable<User | undefined> {
    return this.userService.getUsers().pipe(
      map( users => {
        return users.find(u => u.email === credentials.email && u.password === credentials.password)           
      })
    )
  }

  getTipoUsuarioLogueado(): string | null {
    let userType = localStorage.getItem("userType");
   
    return (userType !== null) ? JSON.parse(userType) : null;
}

  isAdmin(): boolean {
    let userType = localStorage.getItem("userType");
 
    return (userType !== null && JSON.parse(userType) === 'ADMIN');
  }
}
