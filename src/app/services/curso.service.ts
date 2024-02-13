import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { Observable, of } from 'rxjs';

/*
let STUDENTS: Student[] = [
  {id: 1, name: 'Tony', lastName: 'Stark', dni: 12345678, email: 'tony@gmail.com'},
  {id: 2, name: 'Peter', lastName: 'Parker', dni: 12345677, email: 'peter@gmail.com'},
  {id: 3, name: 'Carla', lastName: 'Devin',dni: 12345687, email: 'carla@gmail.com'},
  {id: 4, name: 'Braian', lastName: 'Martinez',dni: 12345666, email: 'braian@gmail.com'},
  {id: 5, name: 'Bruno', lastName: 'Fernandez',dni: 12345655, email: 'bruno@gmail.com'},
  {id: 6, name: 'Carolina', lastName: 'Ortega',dni: 12345644, email: 'caro@gmail.com'},
  {id: 7, name: 'Natalia', lastName: 'Perez',dni: 12345633, email: 'nati@gmail.com'},
  {id: 8, name: 'Federico', lastName: 'Rodriguez',dni: 12345622, email: 'fede@gmail.com'},
  {id: 9, name: 'Hernan', lastName: 'Martinez',dni: 12345611, email: 'hernan@gmail.com'},
  {id: 10, name: 'Juan', lastName: 'Gonzalez',dni: 12345699, email: 'juang@gmail.com'},
]*/

let CURSOS: Curso[] = [
  {id: 1, name: "ANGULAR", day: "LUNES", time: "18.30", teacher: "Bruce Wayne"},
  {id: 2, name: "JAVA", day: "MIERCOLES", time: "20.00", teacher: "Bruce Wayne"},
  {id: 3, name: "DISEÑO WEB", day: "VIERNES", time: "20.30", teacher: "Bruce Wayne"}  
]

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  getAllCursos(): Observable<Curso[]>{
    return of(CURSOS);
  }

  addCurso(curso: Curso){
    curso.id = CURSOS[CURSOS.length - 1].id + 1;
    CURSOS = [...CURSOS, curso];    
    return this.getAllCursos();
  }

  deleteCurso(id: Number): Observable<Curso[]> {
    CURSOS = CURSOS.filter(cur => cur.id != id);
    return this.getAllCursos();
  }

  getCursoById(id: number): Observable<Curso | undefined> {
    return of(CURSOS.find((cur) => cur.id == id));
  }

  updateCursoById(id: number, curso: Curso) {
    CURSOS = CURSOS.map((item) => (item.id === id ? { ...item, ...curso } : item));
    return this.getAllCursos();
  }  
}
