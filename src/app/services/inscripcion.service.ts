import { Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Inscripcion } from '../models/inscripcion';
import { Observable, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  
  private apiUrl:string = `${environments.baseUrl}/registrations`;
  
  constructor(private http: HttpClient) { }

  getAllInscripciones(): Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>(`${this.apiUrl}?_expand=student&_expand=course`);
    
  }

  addInscripcion(ins: Inscripcion): Observable<Inscripcion>{      
    return this.http.post<Inscripcion>(this.apiUrl, ins);
  }

  deleteInscripcion(id: Number): Observable<Inscripcion[]> {    
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Inscripcion>(url).pipe(mergeMap(() => this.getAllInscripciones()));
  }

  getInscripcionById(id: number): Observable<Inscripcion> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Inscripcion>(url);
  }

  updateInscripcionById(id: number, ins: Inscripcion) {    
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Inscripcion>(url, ins);
  }  

  
}
