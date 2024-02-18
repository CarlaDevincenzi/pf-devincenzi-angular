import { Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl:string = `${environments.baseUrl}/users`;
  
  constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.apiUrl);
    }

    getUserById(id: number): Observable<User> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<User>(url);
    }
    
}
