import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Observable, mergeMap, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl:string = `${environments.baseUrl}/students`;

  constructor(private http: HttpClient) { }  

  getAllStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.apiUrl);
  }

  addStudent(stu: Student): Observable<Student>{        
    return this.http.post<Student>(this.apiUrl, stu);
  }  

  deleteStudent(id: Number): Observable<Student[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Student>(url).pipe(mergeMap(() =>this.getAllStudents()));
  }  

  getStudentById(id: number): Observable<Student> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Student>(url);
  }

  updateStudentById(id: number, student: Student): Observable<Student> {
    const url = `${this.apiUrl}/${id}`;
  return this.http.put<Student>(url, student);
  }
 
}

  
  

