import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { Observable, mergeMap, of } from 'rxjs';
import { environments } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CursoService {
  
  private apiUrl:string = `${environments.baseUrl}/courses`;
  
  constructor(private http: HttpClient) { }

  getAllCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.apiUrl);
  }

  addCurso(curso: Curso): Observable<Curso>{      
    return this.http.post<Curso>(this.apiUrl, curso);
  }

  deleteCurso(id: Number): Observable<Curso[]> {    
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Curso>(url).pipe(mergeMap(() => this.getAllCursos()));
  }

  getCursoById(id: number): Observable<Curso> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Curso>(url);
  }

  updateCursoById(id: number, curso: Curso) {    
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Curso>(url, curso);
  }  
}
